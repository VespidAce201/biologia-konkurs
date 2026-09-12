(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var ui = window.App.components.ui;
  var gamificationRepo = window.App.db.gamificationRepo;
  var gamificationEngine = window.App.modules.gamificationEngine;

  function render(root) {
    var main = h('div', { class: 'app-main' });
    root.appendChild(main);
    main.appendChild(h('h1', {}, 'Osiągnięcia i poziom'));

    var stan = gamificationRepo.state();
    var poziomInfo = gamificationRepo.poziomZXp(stan.xp);

    main.appendChild(
      h(
        'div',
        { class: 'card', style: { marginBottom: '24px' } },
        h(
          'div',
          { class: 'flex items-center gap-16 flex-wrap' },
          h('div', { class: 'avatar-level' }, String(poziomInfo.poziom)),
          h(
            'div',
            { style: { flex: '1', minWidth: '200px' } },
            h('div', { class: 'flex items-center justify-between' }, h('strong', {}, 'Poziom ' + poziomInfo.poziom), h('span', { class: 'text-muted' }, poziomInfo.xpWPoziomie + ' / ' + poziomInfo.xpDoNastepnego + ' XP')),
            ui.progressBar(window.App.core.utils.percent(poziomInfo.xpWPoziomie, poziomInfo.xpDoNastepnego), { thin: true })
          ),
          h('div', { class: 'flex items-center gap-8' }, h('span', { style: { color: 'var(--color-warning)' }, html: icon('flame', 22) }), h('strong', {}, stan.seriaDni + ' dni z rzędu'))
        )
      )
    );

    main.appendChild(
      h(
        'div',
        { class: 'grid grid-3', style: { marginBottom: '24px' } },
        ui.statTile('Łączne XP', stan.xp, 'star'),
        ui.statTile('Najdłuższa seria', stan.najdluzszaSeria || 0, 'flame'),
        ui.statTile('Zdobyte odznaki', stan.odznaki.length + ' / ' + gamificationEngine.DEFINICJE_ODZNAK.length, 'trophy')
      )
    );

    main.appendChild(h('h2', {}, 'Cele'));
    var celDzienny = stan.celDzienny;
    var celTyg = stan.celTygodniowy;
    main.appendChild(
      h(
        'div',
        { class: 'grid grid-2' },
        ui.card([
          h('div', { class: 'flex items-center justify-between' }, h('strong', {}, 'Cel dzienny'), h('span', {}, celDzienny.xpDzisiaj + ' / ' + celDzienny.docelowyXp + ' XP')),
          ui.progressBar(window.App.core.utils.percent(celDzienny.xpDzisiaj, celDzienny.docelowyXp), { thin: true }),
        ]),
        ui.card([
          h('div', { class: 'flex items-center justify-between' }, h('strong', {}, 'Cel tygodniowy'), h('span', {}, celTyg.dniAktywne.length + ' / ' + celTyg.docelowyDni + ' dni')),
          ui.progressBar(window.App.core.utils.percent(celTyg.dniAktywne.length, celTyg.docelowyDni), { thin: true }),
        ])
      )
    );

    main.appendChild(h('h2', { style: { marginTop: '30px' } }, 'Odznaki'));
    var grid = h('div', { class: 'grid grid-4' });
    gamificationEngine.DEFINICJE_ODZNAK.forEach(function (def) {
      var zdobyta = stan.odznaki.some(function (o) { return o.id === def.id; });
      grid.appendChild(
        h(
          'div',
          { class: 'card text-center', style: { opacity: zdobyta ? 1 : 0.4 } },
          h('div', { style: { color: zdobyta ? 'var(--color-accent)' : 'var(--color-text-faint)' }, html: icon(def.ikona, 30) }),
          h('div', { style: { fontWeight: '700', marginTop: '8px' } }, def.nazwa),
          h('div', { class: 'text-faint', style: { fontSize: '0.78rem' } }, def.opis)
        )
      );
    });
    main.appendChild(grid);
  }

  window.App.pages.osiagniecia = { render: render };
})();
