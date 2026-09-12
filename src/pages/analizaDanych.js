(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var scoringEngine = window.App.modules.scoringEngine;
  var gamificationEngine = window.App.modules.gamificationEngine;
  var resultsRepo = window.App.db.resultsRepo;

  var TYPY = [
    { id: '', label: 'Wszystkie', icon: 'chart' },
    { id: 'wykres', label: 'Wykresy', icon: 'chart' },
    { id: 'tabela', label: 'Tabele', icon: 'layers' },
    { id: 'diagram', label: 'Diagramy', icon: 'dna' },
    { id: 'dane-liczbowe', label: 'Dane liczbowe', icon: 'target' },
  ];

  function renderLista(root, params, query) {
    var main = h('div', { class: 'app-main' });
    main.appendChild(h('h1', {}, 'Trening analizy danych'));
    main.appendChild(h('p', { class: 'text-muted' }, 'Odczytuj i interpretuj wykresy, tabele, diagramy i dane liczbowe — kluczowa umiejętność konkursowa.'));

    var aktywnyTyp = query.typ || '';
    main.appendChild(ui.tabs(TYPY, aktywnyTyp, function (id) { window.App.core.router.navigate('/analiza-danych' + (id ? '?typ=' + id : '')); }));

    var lista = queries.analizaDanychLista(aktywnyTyp || undefined);
    if (!lista.length) {
      main.appendChild(ui.emptyState('Brak ćwiczeń w tej kategorii — w przygotowaniu.'));
      root.appendChild(main);
      return;
    }
    var grid = h('div', { class: 'grid grid-2' });
    lista.forEach(function (item) {
      grid.appendChild(
        ui.card(
          [h('span', { class: 'badge badge-info', style: { marginBottom: '8px' } }, TYPY.find(function (t) { return t.id === item.typ; }).label), h('h3', { class: 'mb-0' }, item.tytul), h('p', { class: 'text-muted', style: { fontSize: '0.86rem' } }, item.pytania.length + ' pytań')],
          { hover: true, onClick: function () { window.App.core.router.navigate('/analiza-danych/' + item.id); } }
        )
      );
    });
    main.appendChild(grid);
    root.appendChild(main);
  }

  function renderMedia(item) {
    if (item.wykres) return h('div', { class: 'card-flat', html: window.App.components.chart.render(item.wykres) });
    if (item.tabela) return h('div', { class: 'card-flat', html: window.App.components.dataTable.render(item.tabela) });
    if (item.diagramId) return h('div', { class: 'card-flat', style: { textAlign: 'center' }, html: queries.diagram(item.diagramId) });
    return null;
  }

  function renderItem(root, id) {
    var item = queries.analizaDanychItem(id);
    var main = h('div', { class: 'app-main container-narrow' });
    if (!item) {
      main.appendChild(ui.emptyState('Nie znaleziono ćwiczenia.'));
      root.appendChild(main);
      return;
    }
    root.appendChild(main);
    main.appendChild(h('a', { href: '#/analiza-danych', class: 'text-muted', style: { fontSize: '0.85rem' } }, '← Wszystkie ćwiczenia'));
    main.appendChild(h('h1', {}, item.tytul));
    if (item.kontekst) main.appendChild(h('p', { class: 'text-muted' }, item.kontekst));
    var media = renderMedia(item);
    if (media) main.appendChild(media);

    var indeks = 0;
    var poprawne = 0;
    var stage = h('div', { style: { marginTop: '20px' } });
    main.appendChild(stage);

    function pokaz() {
      stage.innerHTML = '';
      if (indeks >= item.pytania.length) {
        var procent = window.App.core.utils.percent(poprawne, item.pytania.length);
        gamificationEngine.poAnalizieDanych();
        resultsRepo.dodajCzasNauki(2);
        stage.appendChild(
          h(
            'div',
            { class: 'card text-center' },
            h('div', { style: { color: 'var(--color-secondary)' }, html: icon('chart', 40) }),
            h('h2', {}, 'Ćwiczenie ukończone!'),
            h('p', { class: 'text-muted' }, 'Poprawne odpowiedzi: ' + poprawne + ' / ' + item.pytania.length + ' (' + procent + '%)'),
            h('div', { class: 'flex gap-12 justify-between' }, ui.button('Inne ćwiczenie', { variant: 'secondary', onClick: function () { window.App.core.router.navigate('/analiza-danych'); } }), ui.button('Panel główny', { onClick: function () { window.App.core.router.navigate('/'); } }))
          )
        );
        return;
      }
      var pytanie = item.pytania[indeks];
      var card = h('div', { class: 'card' });
      card.appendChild(h('div', { class: 'badge badge-neutral', style: { marginBottom: '8px' } }, 'Pytanie ' + (indeks + 1) + ' / ' + item.pytania.length));
      card.appendChild(h('h3', {}, pytanie.tresc));
      var qr = window.App.components.questionRenderer.render(pytanie, { onChange: function () {} });
      card.appendChild(qr.node);
      card.appendChild(
        ui.button('Sprawdź', {
          block: true,
          onClick: function (e) {
            var odp = qr.getOdpowiedz();
            var check = scoringEngine.checkAnswer(pytanie, odp);
            if (check.poprawna) poprawne++;
            var feedback = h('div', { style: { marginTop: '12px' } }, h('div', { class: 'badge ' + (check.poprawna ? 'badge-success' : 'badge-danger') }, check.poprawna ? 'Poprawnie!' : 'Niepoprawnie'), h('p', { style: { marginTop: '8px' } }, pytanie.wyjasnienie));
            card.appendChild(feedback);
            card.appendChild(ui.button(indeks < item.pytania.length - 1 ? 'Dalej' : 'Zakończ', { block: true, onClick: function () { indeks++; pokaz(); } }));
            e.currentTarget.disabled = true;
          },
        })
      );
      stage.appendChild(card);
    }
    pokaz();
  }

  window.App.pages.analizaDanych = { renderLista: renderLista, renderItem: renderItem };
})();
