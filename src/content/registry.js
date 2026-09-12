(function () {
  'use strict';

  var store = {
    dzialy: [],
    tematy: [],
    lekcje: [],
    pytania: [],
    fiszki: [],
    diagramy: {}, // id -> function() -> svg string
    doswiadczenia: [],
    analizaDanych: [],
    budowaFunkcja: [],
    egzaminy: [],
    osiagniecia: [],
  };

  function assertUniqueId(list, obj, typeName) {
    if (list.some(function (x) { return x.id === obj.id; })) {
      console.error('[content] Duplikat id w ' + typeName + ':', obj.id);
    }
  }

  var register = {
    dzial: function (obj) {
      assertUniqueId(store.dzialy, obj, 'dzialy');
      store.dzialy.push(obj);
    },
    temat: function (obj) {
      assertUniqueId(store.tematy, obj, 'tematy');
      store.tematy.push(obj);
    },
    lekcja: function (obj) {
      assertUniqueId(store.lekcje, obj, 'lekcje');
      store.lekcje.push(obj);
    },
    pytania: function (arr) {
      arr.forEach(function (p) {
        assertUniqueId(store.pytania, p, 'pytania');
        store.pytania.push(p);
      });
    },
    fiszki: function (arr) {
      arr.forEach(function (f) {
        assertUniqueId(store.fiszki, f, 'fiszki');
        store.fiszki.push(f);
      });
    },
    diagram: function (id, renderFn) {
      if (store.diagramy[id]) console.error('[content] Duplikat diagramu:', id);
      store.diagramy[id] = renderFn;
    },
    doswiadczenie: function (obj) {
      assertUniqueId(store.doswiadczenia, obj, 'doswiadczenia');
      store.doswiadczenia.push(obj);
    },
    analizaDanych: function (obj) {
      assertUniqueId(store.analizaDanych, obj, 'analizaDanych');
      store.analizaDanych.push(obj);
    },
    budowaFunkcja: function (obj) {
      assertUniqueId(store.budowaFunkcja, obj, 'budowaFunkcja');
      store.budowaFunkcja.push(obj);
    },
    egzamin: function (obj) {
      assertUniqueId(store.egzaminy, obj, 'egzaminy');
      store.egzaminy.push(obj);
    },
    osiagniecie: function (obj) {
      assertUniqueId(store.osiagniecia, obj, 'osiagniecia');
      store.osiagniecia.push(obj);
    },
  };

  window.App.content.store = store;
  window.App.content.register = register;
})();
