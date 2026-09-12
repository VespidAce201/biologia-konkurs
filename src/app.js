(function () {
  'use strict';

  window.App.components.header.applyTheme(window.App.db.settingsRepo.get().motyw);

  var router = window.App.core.router;
  var pages = window.App.pages;

  function withHeader(path, renderFn) {
    return function (root, params, query) {
      root.appendChild(window.App.components.header.render(path));
      renderFn(root, params, query);
    };
  }

  router.register('/', withHeader('/', function (root) {
    pages.dashboard.render(root);
  }));

  router.register('/dzialy', withHeader('/dzialy', function (root) {
    pages.dzialy.renderListaDzialow(root);
  }));
  router.register('/dzialy/:id', withHeader('/dzialy', function (root, params) {
    pages.dzialy.renderTematyDzialu(root, params.id);
  }));
  router.register('/tematy/:id', withHeader('/dzialy', function (root, params) {
    pages.temat.render(root, params.id);
  }));
  router.register('/lekcje/:id', withHeader('/dzialy', function (root, params) {
    pages.lekcja.render(root, params.id);
  }));

  router.register('/fiszki', withHeader('/fiszki', function (root, params, query) {
    pages.fiszki.render(root, params, query);
  }));

  router.register('/quiz', withHeader('/quiz', function (root, params, query) {
    pages.quiz.render(root, params, query);
  }));

  router.register('/doswiadczenia', withHeader('/doswiadczenia', function (root) {
    pages.doswiadczenia.renderLista(root);
  }));
  router.register('/doswiadczenia/:id', withHeader('/doswiadczenia', function (root, params) {
    pages.doswiadczenia.renderScenariusz(root, params.id);
  }));

  router.register('/analiza-danych', withHeader('/analiza-danych', function (root, params, query) {
    pages.analizaDanych.renderLista(root, params, query);
  }));
  router.register('/analiza-danych/:id', withHeader('/analiza-danych', function (root, params) {
    pages.analizaDanych.renderItem(root, params.id);
  }));

  router.register('/budowa-funkcja', withHeader('/budowa-funkcja', function (root, params, query) {
    pages.budowaFunkcja.render(root, params, query);
  }));

  router.register('/egzaminy', withHeader('/egzaminy', function (root) {
    pages.egzamin.renderLista(root, 'probny');
  }));
  router.register('/egzaminy/:id', withHeader('/egzaminy', function (root, params) {
    pages.egzamin.renderEgzaminDetail(root, params.id, 'probny');
  }));

  router.register('/konkurs', withHeader('/konkurs', function (root) {
    pages.egzamin.renderLista(root, 'konkursowy');
  }));
  router.register('/konkurs/:id', withHeader('/konkurs', function (root, params) {
    pages.egzamin.renderEgzaminDetail(root, params.id, 'konkursowy');
  }));

  router.register('/statystyki', withHeader('/statystyki', function (root) {
    pages.statystyki.render(root);
  }));

  router.register('/osiagniecia', withHeader('/osiagniecia', function (root) {
    pages.osiagniecia.render(root);
  }));

  router.notFound(function (root) {
    root.appendChild(window.App.components.header.render(''));
    root.appendChild(
      window.App.core.utils.h(
        'div',
        { class: 'app-main empty-state' },
        window.App.core.utils.h('h1', {}, '404'),
        window.App.core.utils.h('p', {}, 'Nie znaleziono strony.'),
        window.App.core.utils.h('a', { href: '#/' }, 'Wróć do panelu głównego')
      )
    );
  });

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('app-root');
    console.log('[BioKonkurs] Załadowano treści: dzialy=' + window.App.content.store.dzialy.length + ' tematy=' + window.App.content.store.tematy.length + ' lekcje=' + window.App.content.store.lekcje.length + ' pytania=' + window.App.content.store.pytania.length + ' fiszki=' + window.App.content.store.fiszki.length);
    router.init(root);
  });
})();
