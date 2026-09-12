(function () {
  'use strict';
  var h = window.App.core.utils.h;
  var icon = window.App.components.icons.icon;
  var router = window.App.core.router;

  var NAV_ITEMS = [
    { path: '/', label: 'Panel główny' },
    { path: '/dzialy', label: 'Nauka' },
    { path: '/fiszki', label: 'Fiszki' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/doswiadczenia', label: 'Doświadczenia' },
    { path: '/analiza-danych', label: 'Analiza danych' },
    { path: '/budowa-funkcja', label: 'Budowa→funkcja' },
    { path: '/egzaminy', label: 'Egzaminy' },
    { path: '/konkurs', label: 'Symulacja konkursu' },
    { path: '/statystyki', label: 'Statystyki' },
    { path: '/osiagniecia', label: 'Osiągnięcia' },
  ];

  function applyTheme(motyw) {
    var root = document.documentElement;
    if (motyw === 'ciemny') root.setAttribute('data-theme', 'dark');
    else if (motyw === 'jasny') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
  }

  function currentMotyw() {
    return window.App.db.settingsRepo.get().motyw;
  }

  function toggleTheme(iconEl) {
    var current = currentMotyw();
    var next = current === 'ciemny' ? 'jasny' : current === 'jasny' ? 'system' : 'ciemny';
    window.App.db.settingsRepo.setMotyw(next);
    applyTheme(next);
    iconEl.innerHTML = icon(next === 'ciemny' ? 'moon' : 'sun', 18);
    iconEl.title = 'Motyw: ' + next;
  }

  function render(activePath) {
    applyTheme(currentMotyw());
    var motyw = currentMotyw();

    var mobileOpen = false;
    var navEl = h(
      'nav',
      { class: 'app-nav', id: 'app-nav' },
      NAV_ITEMS.map(function (item) {
        var isActive = activePath === item.path || (item.path !== '/' && activePath.indexOf(item.path) === 0);
        return h(
          'a',
          {
            href: '#' + item.path,
            class: isActive ? 'active' : '',
          },
          item.label
        );
      })
    );

    var themeBtn = h('button', {
      class: 'icon-btn',
      title: 'Zmień motyw',
      html: icon(motyw === 'ciemny' ? 'moon' : 'sun', 18),
      onClick: function (e) {
        toggleTheme(e.currentTarget);
      },
    });

    var menuToggle = h('button', {
      class: 'icon-btn mobile-nav-toggle',
      html: icon('menu', 18),
      onClick: function () {
        mobileOpen = !mobileOpen;
        navEl.style.display = mobileOpen ? 'flex' : '';
        navEl.style.position = mobileOpen ? 'absolute' : '';
        navEl.style.top = mobileOpen ? '56px' : '';
        navEl.style.left = '0';
        navEl.style.right = '0';
        navEl.style.background = 'var(--color-bg-elevated)';
        navEl.style.flexDirection = mobileOpen ? 'column' : '';
        navEl.style.padding = mobileOpen ? '10px 16px' : '';
        navEl.style.borderBottom = mobileOpen ? '1px solid var(--color-border)' : '';
      },
    });

    var header = h(
      'header',
      { class: 'app-header' },
      h(
        'a',
        { href: '#/', class: 'app-brand', style: { color: 'var(--color-text)' } },
        h('span', { class: 'brand-leaf', html: icon('leaf', 24) }),
        h('span', {}, 'BioKonkurs')
      ),
      navEl,
      h('div', { class: 'header-actions' }, menuToggle, themeBtn)
    );

    return header;
  }

  window.App.components.header = { render: render, applyTheme: applyTheme };
})();
