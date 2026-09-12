(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var scoringEngine = window.App.modules.scoringEngine;
  var gamificationEngine = window.App.modules.gamificationEngine;
  var resultsRepo = window.App.db.resultsRepo;

  var ETAP_LABELS = {
    'problem-badawczy': 'Problem badawczy',
    hipoteza: 'Hipoteza',
    'proba-badawcza': 'Próba badawcza',
    'proba-kontrolna': 'Próba kontrolna',
    zmienna: 'Zmienna',
    przewidywanie: 'Przewidywanie wyniku',
    'analiza-tabeli': 'Analiza wyników',
    wniosek: 'Wniosek',
    'znajdz-blad': 'Znajdź błąd w doświadczeniu',
  };

  function renderLista(root) {
    var main = h('div', { class: 'app-main' });
    main.appendChild(h('h1', {}, 'Trening doświadczeń biologicznych'));
    main.appendChild(
      h(
        'p',
        { class: 'text-muted' },
        'Ćwicz formułowanie problemu badawczego i hipotezy, planowanie doświadczenia, dobór prób kontrolnej i badawczej, przewidywanie oraz analizę wyników, a także wyciąganie wniosków.'
      )
    );
    var lista = queries.doswiadczenia();
    if (!lista.length) {
      main.appendChild(ui.emptyState('Moduł doświadczeń jest w przygotowaniu.'));
      root.appendChild(main);
      return;
    }
    var grid = h('div', { class: 'grid grid-2' });
    lista.forEach(function (d) {
      grid.appendChild(
        ui.card(
          [h('div', { class: 'flex items-center gap-12' }, h('span', { style: { color: 'var(--color-secondary)' }, html: icon('flask', 24) }), h('h3', { class: 'mb-0' }, d.tytul)), h('p', { class: 'text-muted', style: { fontSize: '0.88rem' } }, d.opis.slice(0, 130) + (d.opis.length > 130 ? '…' : '')), h('span', { class: 'badge badge-info' }, d.pytania.length + ' kroków')],
          { hover: true, onClick: function () { window.App.core.router.navigate('/doswiadczenia/' + d.id); } }
        )
      );
    });
    main.appendChild(grid);
    root.appendChild(main);
  }

  function renderScenariusz(root, id) {
    var scenariusz = queries.doswiadczenie(id);
    var main = h('div', { class: 'app-main container-narrow' });
    if (!scenariusz) {
      main.appendChild(ui.emptyState('Nie znaleziono scenariusza.'));
      root.appendChild(main);
      return;
    }
    root.appendChild(main);
    main.appendChild(h('a', { href: '#/doswiadczenia', class: 'text-muted', style: { fontSize: '0.85rem' } }, '← Wszystkie doświadczenia'));
    main.appendChild(h('h1', {}, scenariusz.tytul));
    main.appendChild(h('div', { class: 'card-flat', style: { marginBottom: '20px' } }, h('p', { style: { margin: 0 } }, scenariusz.opis)));

    var indeks = 0;
    var poprawne = 0;
    var stage = h('div', {});
    main.appendChild(stage);

    function pokaz() {
      stage.innerHTML = '';
      if (indeks >= scenariusz.pytania.length) {
        var procent = window.App.core.utils.percent(poprawne, scenariusz.pytania.length);
        gamificationEngine.poDoswiadczeniu();
        resultsRepo.dodajCzasNauki(3);
        stage.appendChild(
          h(
            'div',
            { class: 'card text-center' },
            h('div', { style: { color: 'var(--color-secondary)' }, html: icon('flask', 40) }),
            h('h2', {}, 'Doświadczenie ukończone!'),
            h('p', { class: 'text-muted' }, 'Poprawne odpowiedzi: ' + poprawne + ' / ' + scenariusz.pytania.length + ' (' + procent + '%)'),
            h('div', { class: 'flex gap-12 justify-between' }, ui.button('Inne doświadczenie', { variant: 'secondary', onClick: function () { window.App.core.router.navigate('/doswiadczenia'); } }), ui.button('Panel główny', { onClick: function () { window.App.core.router.navigate('/'); } }))
          )
        );
        return;
      }
      var krok = scenariusz.pytania[indeks];
      stage.appendChild(h('div', { class: 'badge badge-neutral', style: { marginBottom: '10px' } }, 'Krok ' + (indeks + 1) + ' / ' + scenariusz.pytania.length + ' — ' + (ETAP_LABELS[krok.typ] || krok.typ)));
      var card = h('div', { class: 'card' });
      card.appendChild(h('h3', {}, krok.tresc));
      var qr = window.App.components.questionRenderer.render(krok, { onChange: function () {} });
      card.appendChild(qr.node);

      var feedback = h('div', { style: { marginTop: '12px' } });
      var actions = h('div', { style: { marginTop: '14px' } });

      card.appendChild(
        ui.button('Sprawdź', {
          block: true,
          onClick: function (e) {
            var odp = qr.getOdpowiedz();
            var check = scoringEngine.checkAnswer(krok, odp);
            if (check.poprawna) poprawne++;
            feedback.innerHTML = '';
            feedback.appendChild(h('div', { class: 'badge ' + (check.poprawna ? 'badge-success' : 'badge-danger') }, check.poprawna ? 'Poprawnie!' : 'Niepoprawnie'));
            feedback.appendChild(h('p', { style: { marginTop: '8px' } }, krok.wyjasnienie));
            card.appendChild(feedback);
            actions.innerHTML = '';
            actions.appendChild(ui.button(indeks < scenariusz.pytania.length - 1 ? 'Dalej' : 'Zakończ', { block: true, onClick: function () { indeks++; pokaz(); } }));
            card.appendChild(actions);
            e.currentTarget.disabled = true;
          },
        })
      );
      stage.appendChild(card);
    }
    pokaz();
  }

  window.App.pages.doswiadczenia = { renderLista: renderLista, renderScenariusz: renderScenariusz };
})();
