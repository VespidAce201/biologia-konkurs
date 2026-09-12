(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var utils = window.App.core.utils;
  var statsEngine = window.App.modules.statsEngine;
  var queries = window.App.content.queries;

  function render(root) {
    var main = h('div', { class: 'app-main' });
    root.appendChild(main);
    main.appendChild(h('h1', {}, 'Statystyki i postępy'));

    var dane = statsEngine.pelnePodsumowanie();

    main.appendChild(
      h(
        'div',
        { class: 'grid grid-4', style: { marginBottom: '24px' } },
        ui.statTile('Postęp ogólny', dane.ogolny.procent + '%', 'target'),
        ui.statTile('Quizy rozwiązane', dane.quizy.liczbaQuizow, 'quiz'),
        ui.statTile('Skuteczność quizów', dane.quizy.sredniaSkutecznosc + '%', 'chart'),
        ui.statTile('Czas nauki łącznie', Math.round(dane.czasNaukiLacznie / 60) + ' godz', 'clock')
      )
    );

    main.appendChild(h('h2', {}, 'Postęp według działów'));
    var dzGrid = h('div', { class: 'grid grid-2' });
    dane.dzialy.forEach(function (d) {
      dzGrid.appendChild(
        ui.card([
          h('div', { class: 'flex items-center justify-between' }, h('strong', {}, d.dzial.nazwa), h('span', {}, d.procentLekcji + '%')),
          h('p', { class: 'text-faint', style: { fontSize: '0.8rem' } }, 'Lekcje: ' + d.lekcjeUkonczone + '/' + d.lekcjeLacznie + (d.skutecznoscPytan !== null ? ' • Skuteczność pytań: ' + d.skutecznoscPytan + '%' : '')),
          ui.progressBar(d.procentLekcji, { thin: true }),
        ])
      );
    });
    main.appendChild(dzGrid);

    main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Nauka w ostatnich 7 dniach'));
    var chartSpec = { typ: 'slupkowy', jednostka: 'min', dane: dane.czasNaukiOstatnie7.map(function (d) { return { etykieta: d.data.slice(5), wartosc: d.minuty }; }) };
    main.appendChild(h('div', { class: 'card', html: window.App.components.chart.render(chartSpec) }));

    main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Fiszki'));
    main.appendChild(
      h(
        'div',
        { class: 'grid grid-4' },
        ui.statTile('Razem', dane.fiszki.razem, 'cards'),
        ui.statTile('Nowe', dane.fiszki.nowe, 'star'),
        ui.statTile('W nauce', dane.fiszki.ucze, 'refresh'),
        ui.statTile('Opanowane', dane.fiszki.opanowane, 'check')
      )
    );

    var grid2 = h('div', { class: 'grid grid-2', style: { marginTop: '30px' } });
    var slabeCard = h('div', { class: 'card' }, h('h3', {}, 'Słabe tematy'));
    if (!dane.slabeIMocne.slabe.length) slabeCard.appendChild(h('p', { class: 'text-muted' }, 'Brak — świetnie!'));
    dane.slabeIMocne.slabe.slice(0, 8).forEach(function (s) {
      var t = queries.temat(s.tematId);
      slabeCard.appendChild(h('div', { class: 'flex items-center justify-between', style: { padding: '6px 0', borderBottom: '1px solid var(--color-border)' } }, h('span', {}, t ? t.nazwa : s.tematId), h('span', { class: 'badge badge-danger' }, s.skutecznosc + '%')));
    });
    var mocneCard = h('div', { class: 'card' }, h('h3', {}, 'Mocne tematy'));
    if (!dane.slabeIMocne.mocne.length) mocneCard.appendChild(h('p', { class: 'text-muted' }, 'Rozwiąż więcej pytań, aby zobaczyć swoje mocne strony.'));
    dane.slabeIMocne.mocne.slice(0, 8).forEach(function (s) {
      var t = queries.temat(s.tematId);
      mocneCard.appendChild(h('div', { class: 'flex items-center justify-between', style: { padding: '6px 0', borderBottom: '1px solid var(--color-border)' } }, h('span', {}, t ? t.nazwa : s.tematId), h('span', { class: 'badge badge-success' }, s.skutecznosc + '%')));
    });
    grid2.appendChild(slabeCard);
    grid2.appendChild(mocneCard);
    main.appendChild(grid2);

    main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Historia egzaminów'));
    if (!dane.egzaminy.length) {
      main.appendChild(ui.emptyState('Nie rozwiązano jeszcze żadnego egzaminu.'));
    } else {
      var table = h(
        'table',
        { class: 'data-table' },
        h('thead', {}, h('tr', {}, h('th', {}, 'Data'), h('th', {}, 'Egzamin'), h('th', {}, 'Wynik'), h('th', {}, '%'), h('th', {}, 'Czas'))),
        h(
          'tbody',
          {},
          dane.egzaminy.slice(0, 15).map(function (w) {
            return h('tr', {}, h('td', {}, utils.formatDate(w.data)), h('td', {}, w.tytul), h('td', {}, w.uzyskanePunkty + '/' + w.maxPunkty), h('td', {}, w.procent + '%'), h('td', {}, utils.formatTime(w.czasSek)));
          })
        )
      );
      main.appendChild(h('div', { class: 'card scroll-x' }, table));
    }
  }

  window.App.pages.statystyki = { render: render };
})();
