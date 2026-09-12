(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var examEngine = window.App.modules.examEngine;
  var resultsRepo = window.App.db.resultsRepo;
  var gamificationEngine = window.App.modules.gamificationEngine;
  var utils = window.App.core.utils;

  function pobierzPytaniaEgzaminu(egz) {
    if (egz.pytaniaIds && egz.pytaniaIds.length) return queries.pytaniaByIds(egz.pytaniaIds);
    return egz.pytania || [];
  }

  function renderLista(root, typ) {
    var main = h('div', { class: 'app-main' });
    var tytul = typ === 'konkursowy' ? 'Symulacja konkursu' : 'Egzaminy próbne';
    main.appendChild(h('h1', {}, tytul));
    if (typ === 'konkursowy') {
      main.appendChild(h('p', { class: 'text-muted' }, 'Pełna symulacja I etapu (szkolnego) konkursu: 40 punktów, 60 minut, arkusz zawierający różnorodne pytania ze wszystkich działów.'));
    } else {
      main.appendChild(h('p', { class: 'text-muted' }, 'Gotowe zestawy egzaminacyjne o różnym poziomie trudności — sprawdź swoją wiedzę i umiejętności w warunkach zbliżonych do konkursu.'));
    }
    var lista = queries.egzaminy(typ);
    if (!lista.length) {
      main.appendChild(ui.emptyState('Brak dostępnych zestawów.'));
      root.appendChild(main);
      return;
    }
    var grid = h('div', { class: 'grid grid-2' });
    lista.forEach(function (egz) {
      var poprzedni = resultsRepo.ostatniWynikEgzaminu(egz.id);
      grid.appendChild(
        ui.card(
          [
            h('div', { class: 'flex items-center gap-12' }, h('span', { style: { color: 'var(--color-accent)' }, html: icon(typ === 'konkursowy' ? 'trophy' : 'clock', 24) }), h('h3', { class: 'mb-0' }, egz.tytul)),
            h('p', { class: 'text-muted', style: { fontSize: '0.86rem' } }, egz.opis || ''),
            h('div', { class: 'flex gap-8 flex-wrap' }, ui.badge(pobierzPytaniaEgzaminu(egz).length + ' pytań', 'info'), ui.badge(egz.maxPunkty + ' pkt', 'neutral'), ui.badge(egz.limitCzasuMin + ' min', 'neutral')),
            poprzedni ? h('p', { class: 'text-faint', style: { fontSize: '0.8rem', marginTop: '8px' } }, 'Ostatni wynik: ' + poprzedni.uzyskanePunkty + '/' + poprzedni.maxPunkty + ' (' + poprzedni.procent + '%)') : null,
          ],
          { hover: true, onClick: function () { window.App.core.router.navigate((typ === 'konkursowy' ? '/konkurs/' : '/egzaminy/') + egz.id); } }
        )
      );
    });
    main.appendChild(grid);
    root.appendChild(main);
  }

  function renderIntro(root, egz, onStart) {
    var main = h('div', { class: 'app-main container-narrow' });
    main.appendChild(h('h1', {}, egz.tytul));
    main.appendChild(
      h(
        'div',
        { class: 'card' },
        h('p', {}, egz.opis || ''),
        h(
          'div',
          { class: 'grid grid-3', style: { margin: '20px 0' } },
          ui.statTile('Punkty', egz.maxPunkty, 'target'),
          ui.statTile('Minuty', egz.limitCzasuMin, 'clock'),
          ui.statTile('Pytania', pobierzPytaniaEgzaminu(egz).length, 'quiz')
        ),
        h(
          'ul',
          { class: 'text-muted' },
          h('li', {}, 'Masz ograniczony czas — po jego upływie arkusz zostanie automatycznie zakończony.'),
          h('li', {}, 'Możesz przechodzić między pytaniami w dowolnej kolejności.'),
          h('li', {}, 'Możesz oznaczyć pytanie flagą, aby wrócić do niego później.'),
          h('li', {}, 'Wynik i szczegółowa analiza pojawią się po zakończeniu arkusza.')
        ),
        ui.button('Rozpocznij arkusz', { block: true, icon: 'arrowRight', onClick: onStart })
      )
    );
    root.appendChild(main);
  }

  function renderRunner(root, egz) {
    var pytania = utils.shuffle(pobierzPytaniaEgzaminu(egz));
    var session = examEngine.createSession(pytania, { limitCzasuMin: egz.limitCzasuMin });
    var qrHandles = {};

    var main = h('div', { class: 'app-main' });
    root.appendChild(main);

    var timerEl = h('div', { class: 'timer-pill' }, icon('clock', 16) + ' --:--');
    timerEl.innerHTML = icon('clock', 16) + ' ' + utils.formatTime(session.state.pozostalyCzasSek || 0);
    var pointsEl = h('span', { class: 'badge badge-info' }, '0 / ' + egz.maxPunkty + ' pkt');

    var navGrid = h('div', { class: 'exam-nav-grid' });
    var questionArea = h('div', { class: 'card', style: { marginTop: '16px' } });

    function refreshNav() {
      navGrid.innerHTML = '';
      pytania.forEach(function (p, i) {
        var answered = session.state.odpowiedzi[p.id] !== undefined;
        var flagged = !!session.state.oznaczone[p.id];
        var btn = h('button', { class: 'exam-nav-btn' + (i === session.state.indeks ? ' current' : '') + (answered ? ' answered' : '') + (flagged ? ' flagged' : ''), onClick: function () { saveCurrentAnswer(); session.goto(i); render(); } }, String(i + 1));
        navGrid.appendChild(btn);
      });
    }

    var currentHandle = null;
    function saveCurrentAnswer() {
      if (currentHandle) {
        var odp = currentHandle.getOdpowiedz();
        if (odp !== null && odp !== undefined) session.setAnswer(pytania[session.state.indeks].id, odp);
      }
    }

    function render() {
      questionArea.innerHTML = '';
      var pytanie = pytania[session.state.indeks];
      var poprzedniaOdp = session.state.odpowiedzi[pytanie.id];
      questionArea.appendChild(
        h(
          'div',
          { class: 'flex items-center justify-between flex-wrap gap-8', style: { marginBottom: '10px' } },
          h('span', { class: 'badge badge-neutral' }, 'Pytanie ' + (session.state.indeks + 1) + ' / ' + pytania.length),
          h('div', { class: 'flex gap-8' }, ui.poziomBadge(pytanie.poziom), h('span', { class: 'badge badge-neutral' }, pytanie.punkty + ' pkt'))
        )
      );
      questionArea.appendChild(h('h3', {}, pytanie.tresc));
      var qr = window.App.components.questionRenderer.render(pytanie, { odpowiedzPoczatkowa: poprzedniaOdp, onChange: function () {} });
      currentHandle = qr;
      questionArea.appendChild(qr.node);

      var navButtons = h(
        'div',
        { class: 'flex items-center justify-between flex-wrap gap-12', style: { marginTop: '18px' } },
        h(
          'div',
          { class: 'flex gap-8' },
          ui.button('Poprzednie', { variant: 'secondary', size: 'sm', disabled: session.state.indeks === 0, onClick: function () { saveCurrentAnswer(); session.prev(); render(); } }),
          ui.button(session.state.oznaczone[pytanie.id] ? 'Usuń flagę' : 'Oznacz flagą', { variant: 'secondary', size: 'sm', icon: 'flag', onClick: function () { session.toggleFlag(pytanie.id); render(); } })
        ),
        session.state.indeks < pytania.length - 1
          ? ui.button('Następne', { size: 'sm', onClick: function () { saveCurrentAnswer(); session.next(); render(); } })
          : ui.button('Zakończ arkusz', { size: 'sm', variant: 'danger', onClick: function () { saveCurrentAnswer(); confirmFinish(); } })
      );
      questionArea.appendChild(navButtons);
      pointsEl.textContent = session.liczbaOdpowiedzianych() + ' / ' + pytania.length + ' odpowiedziano';
      refreshNav();
    }

    function confirmFinish() {
      var modalContent = h(
        'div',
        {},
        h('h3', {}, 'Zakończyć arkusz?'),
        h('p', { class: 'text-muted' }, 'Odpowiedziano na ' + session.liczbaOdpowiedzianych() + ' z ' + pytania.length + ' pytań. Tej operacji nie można cofnąć.'),
        h('div', { class: 'flex gap-12 justify-between', style: { marginTop: '16px' } }, ui.button('Wróć', { variant: 'secondary', onClick: function () { closeModal(); } }), ui.button('Zakończ', { variant: 'danger', onClick: function () { closeModal(); session.finish('reczne'); } }))
      );
      var closeModal = ui.openModal(modalContent);
    }

    session.on('tick', function (sek) {
      timerEl.innerHTML = icon('clock', 16) + ' ' + utils.formatTime(sek);
      timerEl.classList.toggle('warning', sek <= 600 && sek > 120);
      timerEl.classList.toggle('danger', sek <= 120);
    });

    session.on('finish', function (payload) {
      showResults(root, egz, payload.wynik, pytania, payload.powod);
    });

    var header = h(
      'div',
      { class: 'flex items-center justify-between flex-wrap gap-12', style: { marginBottom: '10px' } },
      h('h2', { class: 'mb-0' }, egz.tytul),
      h('div', { class: 'flex items-center gap-12' }, pointsEl, timerEl)
    );
    main.appendChild(header);
    main.appendChild(navGrid);
    main.appendChild(questionArea);

    render();
    session.start();
  }

  function showResults(root, egz, wynik, pytania, powod) {
    root.innerHTML = '';
    root.appendChild(window.App.components.header.render(''));
    var main = h('div', { class: 'app-main' });
    root.appendChild(main);

    resultsRepo.zapiszWynikEgzaminu({ examId: egz.id, tytul: egz.tytul, typ: egz.typ, uzyskanePunkty: wynik.uzyskanePunkty, maxPunkty: wynik.maxPunkty, procent: wynik.procent, czasSek: wynik.czasSek, poprawneLiczba: wynik.poprawneLiczba, liczbaPytan: wynik.liczbaPytan });
    resultsRepo.dodajCzasNauki(Math.max(1, Math.round(wynik.czasSek / 60)));
    gamificationEngine.poEgzaminie(wynik.uzyskanePunkty, wynik.maxPunkty, egz.typ);

    var analizaDzialow = {};
    wynik.szczegoly.forEach(function (s) {
      var pytanie = pytania.find(function (p) { return p.id === s.pytanieId; });
      if (!pytanie) return;
      var dzial = queries.dzial(pytanie.dzialId);
      var key = dzial ? dzial.nazwa : 'Inne';
      var entry = analizaDzialow[key] || { max: 0, uzyskane: 0 };
      entry.max += pytanie.punkty || 1;
      entry.uzyskane += s.check.punktyUzyskane;
      analizaDzialow[key] = entry;
    });

    var kolorWyniku = wynik.procent >= 80 ? 'var(--color-success)' : wynik.procent >= 50 ? 'var(--color-warning)' : 'var(--color-danger)';

    main.appendChild(
      h(
        'div',
        { class: 'card text-center' },
        powod === 'czas' ? h('p', { class: 'badge badge-warning' }, 'Czas się skończył — arkusz zapisany automatycznie') : null,
        h('div', { style: { color: kolorWyniku }, html: icon('trophy', 46) }),
        h('h1', {}, wynik.uzyskanePunkty + ' / ' + wynik.maxPunkty + ' pkt'),
        h('p', { class: 'text-muted' }, wynik.procent + '% • ' + wynik.poprawneLiczba + '/' + wynik.liczbaPytan + ' poprawnych odpowiedzi • czas: ' + utils.formatTime(wynik.czasSek))
      )
    );

    main.appendChild(h('h2', { style: { marginTop: '28px' } }, 'Analiza działów'));
    var dzialyGrid = h('div', { class: 'grid grid-2' });
    Object.keys(analizaDzialow).forEach(function (key) {
      var e = analizaDzialow[key];
      var pct = utils.percent(e.uzyskane, e.max);
      dzialyGrid.appendChild(
        ui.card([
          h('div', { class: 'flex items-center justify-between' }, h('strong', {}, key), h('span', {}, pct + '%')),
          ui.progressBar(pct, { thin: true, variant: pct < 50 ? 'danger' : pct < 80 ? 'warning' : '' }),
        ])
      );
    });
    main.appendChild(dzialyGrid);

    var slabe = Object.keys(analizaDzialow).filter(function (k) { return utils.percent(analizaDzialow[k].uzyskane, analizaDzialow[k].max) < 60; });
    if (slabe.length) {
      main.appendChild(
        h('div', { class: 'callout callout-uwaga', style: { marginTop: '20px' } }, h('div', { class: 'callout-title' }, 'Rekomendacja'), h('p', { style: { margin: 0 } }, 'Warto powtórzyć materiał z działów: ' + slabe.join(', ') + '.'))
      );
    }

    main.appendChild(h('h2', { style: { marginTop: '28px' } }, 'Przegląd odpowiedzi'));
    wynik.szczegoly.forEach(function (s, i) {
      var pytanie = pytania.find(function (p) { return p.id === s.pytanieId; });
      if (!pytanie) return;
      if (!s.check.poprawna) {
        window.App.db.srsRepo.zapiszBlad(pytanie.id, { tematId: pytanie.tematId, dzialId: pytanie.dzialId, poziom: pytanie.poziom, ostatniaOdpowiedz: s.odpowiedz });
      }
      main.appendChild(
        h(
          'div',
          { class: 'card-flat', style: { marginBottom: '10px', borderLeft: '4px solid ' + (s.check.poprawna ? 'var(--color-success)' : 'var(--color-danger)') } },
          h('div', { class: 'flex items-center justify-between' }, h('strong', {}, i + 1 + '. ' + pytanie.tresc), h('span', { class: 'badge ' + (s.check.poprawna ? 'badge-success' : 'badge-danger') }, s.check.punktyUzyskane + '/' + pytanie.punkty + ' pkt')),
          h('p', { class: 'text-muted', style: { margin: '6px 0 0', fontSize: '0.88rem' } }, pytanie.wyjasnienie)
        )
      );
    });

    main.appendChild(
      h(
        'div',
        { class: 'flex gap-12 justify-between', style: { marginTop: '24px' } },
        ui.button('Wróć do panelu', { variant: 'secondary', onClick: function () { window.App.core.router.navigate('/'); } }),
        ui.button('Powtórz błędy', { onClick: function () { window.App.core.router.navigate('/quiz'); } })
      )
    );
  }

  function renderEgzaminDetail(root, id, typ) {
    var egz = queries.egzamin(id);
    if (!egz) {
      var main = h('div', { class: 'app-main' }, ui.emptyState('Nie znaleziono zestawu egzaminacyjnego.'));
      root.appendChild(main);
      return;
    }
    renderIntro(root, egz, function () {
      root.innerHTML = '';
      renderRunner(root, egz);
    });
  }

  window.App.pages.egzamin = { renderLista: renderLista, renderEgzaminDetail: renderEgzaminDetail };
})();
