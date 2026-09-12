(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var scoringEngine = window.App.modules.scoringEngine;
  var progressRepo = window.App.db.progressRepo;
  var resultsRepo = window.App.db.resultsRepo;
  var gamificationEngine = window.App.modules.gamificationEngine;
  var srsRepo = window.App.db.srsRepo;

  function renderKonfiguracja(root, query) {
    var main = h('div', { class: 'app-main container-narrow' });
    main.appendChild(h('h1', {}, 'Quiz'));
    main.appendChild(h('p', { class: 'text-muted' }, 'Skonfiguruj quiz — wybierz dział, temat i poziom trudności.'));

    var dzialSelect = h(
      'select',
      {},
      [h('option', { value: '' }, 'Wszystkie działy')].concat(
        queries.dzialy().map(function (d) { return h('option', { value: d.id, selected: query.dzial === d.id }, d.nazwa); })
      )
    );
    var tematSelect = h('select', {}, [h('option', { value: '' }, 'Wszystkie tematy')]);
    function refreshTematy() {
      var dzialId = dzialSelect.value;
      tematSelect.innerHTML = '';
      tematSelect.appendChild(h('option', { value: '' }, 'Wszystkie tematy'));
      var tematy = dzialId ? queries.wszystkieTematyDzialu(dzialId) : [];
      tematy.forEach(function (t) {
        tematSelect.appendChild(h('option', { value: t.id, selected: query.temat === t.id }, t.nazwa));
      });
    }
    dzialSelect.addEventListener('change', refreshTematy);
    if (query.dzial) refreshTematy();
    if (query.temat) {
      var t = queries.temat(query.temat);
      if (t) dzialSelect.value = t.dzialId;
      refreshTematy();
      tematSelect.value = query.temat;
    }

    var poziomSelect = h('select', {}, [
      h('option', { value: '' }, 'Wszystkie poziomy'),
      h('option', { value: 'latwy' }, 'Łatwy'),
      h('option', { value: 'sredni' }, 'Średni'),
      h('option', { value: 'trudny' }, 'Trudny'),
      h('option', { value: 'konkursowy' }, 'Konkursowy'),
    ]);
    var liczbaSelect = h('select', {}, [
      h('option', { value: '10' }, '10 pytań'),
      h('option', { value: '15', selected: true }, '15 pytań'),
      h('option', { value: '20' }, '20 pytań'),
      h('option', { value: '30' }, '30 pytań'),
    ]);

    var form = h(
      'div',
      { class: 'card' },
      h('div', { class: 'grid grid-2' }, h('div', {}, h('label', {}, 'Dział'), dzialSelect), h('div', {}, h('label', {}, 'Temat'), tematSelect)),
      h('div', { class: 'grid grid-2', style: { marginTop: '14px' } }, h('div', {}, h('label', {}, 'Poziom trudności'), poziomSelect), h('div', {}, h('label', {}, 'Liczba pytań'), liczbaSelect)),
      h('div', { style: { marginTop: '20px' } }, ui.button('Rozpocznij quiz', { icon: 'quiz', block: true, onClick: startQuiz }))
    );

    function startQuiz() {
      var filter = { dzialId: dzialSelect.value || undefined, tematId: tematSelect.value || undefined, poziom: poziomSelect.value || undefined };
      var pool = queries.filtrujPytania(filter);
      if (!pool.length) {
        ui.toast('Brak pytań spełniających kryteria.', 'danger');
        return;
      }
      var n = parseInt(liczbaSelect.value, 10);
      var wybrane = window.App.core.utils.shuffle(pool).slice(0, n);
      main.parentNode.removeChild(main);
      uruchomQuiz(root, wybrane, { dzialId: filter.dzialId, tematId: filter.tematId });
    }

    main.appendChild(form);

    var bledy = srsRepo.pytaniaDoPowtorki();
    if (bledy.length) {
      main.appendChild(
        h(
          'div',
          { class: 'card', style: { marginTop: '20px', borderLeft: '4px solid var(--color-warning)' } },
          h('div', { class: 'flex items-center justify-between flex-wrap gap-12' },
            h('div', {}, h('strong', {}, 'Powtórz swoje błędy'), h('p', { class: 'text-muted mb-0', style: { fontSize: '0.86rem' } }, bledy.length + ' pytań czeka na powtórkę')),
            ui.button('Rozpocznij', { variant: 'secondary', onClick: function () {
              var pytania = queries.pytaniaByIds(bledy);
              main.parentNode.removeChild(main);
              uruchomQuiz(root, pytania, { tryb: 'powtorka-bledow' });
            } })
          )
        )
      );
    }

    root.appendChild(main);
  }

  function uruchomQuiz(root, pytania, meta) {
    var main = h('div', { class: 'app-main container-narrow' });
    root.appendChild(main);

    var indeks = 0;
    var poprawneLiczba = 0;
    var punktySuma = 0;
    var maxPunktySuma = 0;
    var startCzas = Date.now();
    var odpowiedziPoTemat = {};

    function pokazPytanie() {
      main.innerHTML = '';
      var pytanie = pytania[indeks];
      main.appendChild(
        h(
          'div',
          { class: 'flex items-center justify-between', style: { marginBottom: '10px' } },
          h('span', { class: 'badge badge-neutral' }, 'Pytanie ' + (indeks + 1) + ' / ' + pytania.length),
          h('div', { class: 'flex gap-8' }, ui.poziomBadge(pytanie.poziom), h('span', { class: 'badge badge-info' }, pytanie.punkty + ' pkt'))
        )
      );
      main.appendChild(ui.progressBar(((indeks) / pytania.length) * 100, { thin: true }));
      var card = h('div', { class: 'card', style: { marginTop: '16px' } });
      card.appendChild(h('h3', {}, pytanie.tresc));

      var qr = window.App.components.questionRenderer.render(pytanie, { onChange: function () {} });
      card.appendChild(qr.node);

      var feedbackArea = h('div', { style: { marginTop: '14px' } });
      var actionArea = h('div', { style: { marginTop: '16px' } });

      var sprawdzBtn = ui.button('Sprawdź odpowiedź', {
        block: true,
        onClick: function () {
          var odp = qr.getOdpowiedz();
          var check = scoringEngine.checkAnswer(pytanie, odp);
          if (check.poprawna) poprawneLiczba++;
          else srsRepo.zapiszBlad(pytanie.id, { tematId: pytanie.tematId, dzialId: pytanie.dzialId, poziom: pytanie.poziom, ostatniaOdpowiedz: odp });
          if (meta.tryb === 'powtorka-bledow' && check.poprawna) srsRepo.oznaczRozwiazane(pytanie.id);
          punktySuma += check.punktyUzyskane;
          maxPunktySuma += pytanie.punkty || 1;
          var stat = odpowiedziPoTemat[pytanie.tematId] || { prob: 0, poprawne: 0, punkty: 0, max: 0 };
          stat.prob++;
          if (check.poprawna) stat.poprawne++;
          stat.punkty += check.punktyUzyskane;
          stat.max += pytanie.punkty || 1;
          odpowiedziPoTemat[pytanie.tematId] = stat;
          gamificationEngine.poOdpowiedzi(check.poprawna);

          // Ponowne wyrenderowanie z zaznaczonym stanem wyniku
          card.innerHTML = '';
          card.appendChild(h('h3', {}, pytanie.tresc));
          var qr2 = window.App.components.questionRenderer.render(pytanie, { odpowiedzPoczatkowa: odp, zablokowane: true, pokazWynikTeraz: true, onChange: function () {} });
          card.appendChild(qr2.node);

          feedbackArea.innerHTML = '';
          feedbackArea.appendChild(h('div', { class: 'badge ' + (check.poprawna ? 'badge-success' : check.czesciowa ? 'badge-warning' : 'badge-danger') }, check.poprawna ? 'Poprawna odpowiedź! +' + check.punktyUzyskane + ' pkt' : check.czesciowa ? 'Częściowo poprawnie (' + check.punktyUzyskane + '/' + pytanie.punkty + ' pkt)' : 'Niepoprawna odpowiedź'));
          feedbackArea.appendChild(h('p', { style: { marginTop: '8px' } }, h('strong', {}, 'Wyjaśnienie: '), pytanie.wyjasnienie));
          card.appendChild(feedbackArea);

          actionArea.innerHTML = '';
          actionArea.appendChild(
            ui.button(indeks < pytania.length - 1 ? 'Następne pytanie' : 'Zakończ quiz', {
              icon: 'arrowRight',
              block: true,
              onClick: function () {
                indeks++;
                if (indeks < pytania.length) pokazPytanie();
                else pokazPodsumowanie();
              },
            })
          );
          card.appendChild(actionArea);
        },
      });
      card.appendChild(sprawdzBtn);
      main.appendChild(card);
    }

    function pokazPodsumowanie() {
      Object.keys(odpowiedziPoTemat).forEach(function (tematId) {
        var s = odpowiedziPoTemat[tematId];
        progressRepo.recordAnswers(tematId, s.poprawne, s.prob, s.punkty, s.max);
      });
      var czasSek = Math.round((Date.now() - startCzas) / 1000);
      var procent = window.App.core.utils.percent(punktySuma, maxPunktySuma);
      resultsRepo.zapiszWynikQuizu({ dzialId: meta.dzialId, tematId: meta.tematId, liczbaPytan: pytania.length, poprawne: poprawneLiczba, punkty: punktySuma, maxPunkty: maxPunktySuma, procent: procent, czasSek: czasSek });
      resultsRepo.dodajCzasNauki(Math.max(1, Math.round(czasSek / 60)));
      gamificationEngine.poQuizUkonczony(procent);

      main.innerHTML = '';
      main.appendChild(
        h(
          'div',
          { class: 'card text-center' },
          h('div', { style: { color: procent >= 80 ? 'var(--color-success)' : procent >= 50 ? 'var(--color-warning)' : 'var(--color-danger)' }, html: icon('trophy', 46) }),
          h('h1', {}, procent + '%'),
          h('p', { class: 'text-muted' }, 'Poprawnych odpowiedzi: ' + poprawneLiczba + ' / ' + pytania.length + ' • Punkty: ' + punktySuma + '/' + maxPunktySuma),
          h('p', { class: 'text-faint' }, 'Czas: ' + window.App.core.utils.formatTime(czasSek)),
          h(
            'div',
            { class: 'flex gap-12 justify-between', style: { marginTop: '20px' } },
            ui.button('Wróć do panelu', { variant: 'secondary', onClick: function () { window.App.core.router.navigate('/'); } }),
            ui.button('Nowy quiz', { onClick: function () { window.App.core.router.navigate('/quiz'); } })
          )
        )
      );
    }

    pokazPytanie();
  }

  function render(root, params, query) {
    renderKonfiguracja(root, query);
  }

  window.App.pages.quiz = { render: render };
})();
