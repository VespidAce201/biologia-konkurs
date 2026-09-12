(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var queries = window.App.content.queries;
  var progressRepo = window.App.db.progressRepo;
  var recommendationEngine = window.App.modules.recommendationEngine;

  function render(root, tematId) {
    var temat = queries.temat(tematId);
    var main = h('div', { class: 'app-main' });
    if (!temat) {
      main.appendChild(ui.emptyState('Nie znaleziono tematu.'));
      root.appendChild(main);
      return;
    }
    var dzial = queries.dzial(temat.dzialId);
    var rodzicTemat = temat.rodzic ? queries.temat(temat.rodzic) : null;

    main.appendChild(
      h(
        'a',
        { href: '#' + (rodzicTemat ? '/tematy/' + rodzicTemat.id : '/dzialy/' + temat.dzialId), class: 'text-muted', style: { fontSize: '0.85rem' } },
        '← ' + (rodzicTemat ? rodzicTemat.nazwa : dzial ? dzial.nazwa : 'Wróć')
      )
    );
    main.appendChild(h('h1', {}, temat.nazwa));

    var podtematy = queries.podtematyTematu(tematId);

    if (podtematy.length) {
      var groups = {};
      var order = [];
      podtematy.forEach(function (pt) {
        var key = pt.grupa || '_';
        if (!groups[key]) {
          groups[key] = [];
          order.push(key);
        }
        groups[key].push(pt);
      });
      order.forEach(function (key) {
        if (key !== '_') main.appendChild(h('h3', { style: { marginTop: '24px' } }, key));
        var grid = h('div', { class: 'grid grid-3' });
        groups[key].forEach(function (pt) {
          var lekcje = queries.lekcjeTematu(pt.id);
          var stanPostepu = progressRepo.all();
          var ukonczone = lekcje.filter(function (l) { return stanPostepu.lekcje[l.id] && stanPostepu.lekcje[l.id].ukonczona; }).length;
          grid.appendChild(
            ui.card([h('h3', { class: 'mb-0' }, pt.nazwa), h('p', { class: 'text-faint', style: { fontSize: '0.82rem' } }, ukonczone + '/' + lekcje.length + ' lekcji')], {
              hover: true,
              onClick: function () { window.App.core.router.navigate('/tematy/' + pt.id); },
            })
          );
        });
        main.appendChild(grid);
      });
      root.appendChild(main);
      return;
    }

    var rekomendacja = recommendationEngine.rekomendacjaDlaTematu(tematId);
    main.appendChild(
      h(
        'div',
        { class: 'card', style: { marginBottom: '20px', borderLeft: '4px solid var(--color-primary)' } },
        h('div', { class: 'flex items-center gap-12' }, h('span', { style: { color: 'var(--color-primary)' }, html: icon('lightbulb', 22) }), h('div', {}, h('strong', {}, 'Rekomendacja: '), rekomendacja.tekst))
      )
    );

    var actionsRow = h(
      'div',
      { class: 'flex gap-12 flex-wrap', style: { marginBottom: '24px' } },
      ui.button('Quiz z tego tematu', { icon: 'quiz', onClick: function () { window.App.core.router.navigate('/quiz?temat=' + tematId); } }),
      ui.button('Fiszki z tego tematu', { icon: 'cards', variant: 'secondary', onClick: function () { window.App.core.router.navigate('/fiszki?temat=' + tematId); } })
    );
    main.appendChild(actionsRow);

    main.appendChild(h('h2', {}, 'Lekcje'));
    var lekcje = queries.lekcjeTematu(tematId);
    if (!lekcje.length) {
      main.appendChild(ui.emptyState('Materiał dla tego tematu jest w przygotowaniu.'));
    } else {
      var list = h('div', { class: 'grid grid-2' });
      lekcje.forEach(function (lekcja) {
        var ukonczona = progressRepo.isLekcjaUkonczona(lekcja.id);
        list.appendChild(
          ui.card(
            [
              h(
                'div',
                { class: 'flex items-center justify-between' },
                h('h3', { class: 'mb-0' }, lekcja.tytul),
                ukonczona ? h('span', { style: { color: 'var(--color-success)' }, html: icon('check', 20) }) : null
              ),
              h('p', { class: 'text-muted', style: { fontSize: '0.88rem' } }, lekcja.wprowadzenie.slice(0, 110) + (lekcja.wprowadzenie.length > 110 ? '…' : '')),
            ],
            { hover: true, onClick: function () { window.App.core.router.navigate('/lekcje/' + lekcja.id); } }
          )
        );
      });
      main.appendChild(list);
    }

    root.appendChild(main);
  }

  window.App.pages.temat = { render: render };
})();
