(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var statsEngine = window.App.modules.statsEngine;
  var progressRepo = window.App.db.progressRepo;

  function renderListaDzialow(root) {
    var main = h('div', { class: 'app-main' });
    main.appendChild(h('h1', {}, 'Nauka — wybierz dział'));
    main.appendChild(h('p', { class: 'text-muted' }, 'Każdy dział zawiera lekcje z pełnym materiałem, pojęciami, ilustracjami oraz pytaniami kontrolnymi.'));

    var grid = h('div', { class: 'grid grid-2' });
    queries.dzialy().forEach(function (dzial) {
      var postep = statsEngine.postepDzialu(dzial.id);
      var card = ui.card(
        [
          h(
            'div',
            { class: 'flex items-center gap-12', style: { marginBottom: '10px' } },
            h('div', { style: { color: dzial.kolor }, html: icon(dzial.ikona, 30) }),
            h('div', {}, h('div', { class: 'text-faint', style: { fontWeight: '700', fontSize: '0.78rem' } }, 'DZIAŁ ' + dzial.kod), h('h3', { class: 'mb-0' }, dzial.nazwa))
          ),
          h('p', { class: 'text-muted' }, dzial.opis),
          h('div', { class: 'flex items-center justify-between', style: { marginBottom: '6px', fontSize: '0.82rem' } }, h('span', { class: 'text-muted' }, 'Lekcje: ' + postep.lekcjeUkonczone + '/' + postep.lekcjeLacznie), h('span', { class: 'text-muted' }, postep.procentLekcji + '%')),
          ui.progressBar(postep.procentLekcji, { thin: true }),
        ],
        { hover: true, onClick: function () { window.App.core.router.navigate('/dzialy/' + dzial.id); } }
      );
      grid.appendChild(card);
    });
    main.appendChild(grid);
    root.appendChild(main);
  }

  function renderTematyDzialu(root, dzialId) {
    var dzial = queries.dzial(dzialId);
    var main = h('div', { class: 'app-main' });
    if (!dzial) {
      main.appendChild(ui.emptyState('Nie znaleziono działu.'));
      root.appendChild(main);
      return;
    }
    main.appendChild(h('a', { href: '#/dzialy', class: 'text-muted', style: { fontSize: '0.85rem' } }, '← Wszystkie działy'));
    main.appendChild(h('h1', {}, 'Dział ' + dzial.kod + ' — ' + dzial.nazwa));
    main.appendChild(h('p', { class: 'text-muted' }, dzial.opis));

    var tematy = queries.tematyDzialu(dzialId);
    var grid = h('div', { class: 'grid grid-2' });
    tematy.forEach(function (temat) {
      var podtematy = queries.podtematyTematu(temat.id);
      var maPodtematy = podtematy.length > 0;
      var lekcje = maPodtematy ? [] : queries.lekcjeTematu(temat.id);
      var skutecznosc = progressRepo.tematSkutecznosc(temat.id);
      var stanPostepu = progressRepo.all();
      var ukonczoneLekcje = lekcje.filter(function (l) { return stanPostepu.lekcje[l.id] && stanPostepu.lekcje[l.id].ukonczona; }).length;

      var body = [h('h3', { class: 'mb-0' }, temat.nazwa)];
      if (maPodtematy) {
        body.push(h('p', { class: 'text-faint', style: { fontSize: '0.85rem' } }, podtematy.length + ' podtematów'));
      } else {
        body.push(h('p', { class: 'text-faint', style: { fontSize: '0.85rem' } }, ukonczoneLekcje + '/' + lekcje.length + ' lekcji ukończonych' + (skutecznosc !== null ? ' • skuteczność pytań: ' + skutecznosc + '%' : '')));
      }
      var card = ui.card(body, { hover: true, onClick: function () { window.App.core.router.navigate('/tematy/' + temat.id); } });
      grid.appendChild(card);
    });
    main.appendChild(grid);
    root.appendChild(main);
  }

  window.App.pages.dzialy = { renderListaDzialow: renderListaDzialow, renderTematyDzialu: renderTematyDzialu };
})();
