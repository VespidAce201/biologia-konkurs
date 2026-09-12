(function () {
  'use strict';
  var store = window.App.content.store;

  function byKolejnosc(a, b) {
    return (a.kolejnosc || 0) - (b.kolejnosc || 0);
  }

  function dzialy() {
    return store.dzialy.slice().sort(byKolejnosc);
  }

  function dzial(id) {
    return store.dzialy.find(function (d) { return d.id === id; }) || null;
  }

  function tematyDzialu(dzialId) {
    return store.tematy
      .filter(function (t) { return t.dzialId === dzialId && !t.rodzic; })
      .sort(byKolejnosc);
  }

  function podtematyTematu(tematId) {
    return store.tematy.filter(function (t) { return t.rodzic === tematId; }).sort(byKolejnosc);
  }

  function temat(id) {
    return store.tematy.find(function (t) { return t.id === id; }) || null;
  }

  function wszystkieTematyDzialu(dzialId) {
    // zwraca tematy + podtematy (wszystkie poziomy) danego działu - do agregacji statystyk
    return store.tematy.filter(function (t) { return t.dzialId === dzialId; });
  }

  function lekcjeTematu(tematId) {
    return store.lekcje.filter(function (l) { return l.tematId === tematId; }).sort(byKolejnosc);
  }

  function lekcja(id) {
    return store.lekcje.find(function (l) { return l.id === id; }) || null;
  }

  function pytanie(id) {
    return store.pytania.find(function (p) { return p.id === id; }) || null;
  }

  function pytaniaByIds(ids) {
    return ids.map(pytanie).filter(Boolean);
  }

  function pytaniaTematu(tematId) {
    return store.pytania.filter(function (p) { return p.tematId === tematId; });
  }

  function pytaniaDzialu(dzialId) {
    return store.pytania.filter(function (p) { return p.dzialId === dzialId; });
  }

  function filtrujPytania(filter) {
    filter = filter || {};
    return store.pytania.filter(function (p) {
      if (filter.dzialId && p.dzialId !== filter.dzialId) return false;
      if (filter.tematId && p.tematId !== filter.tematId) return false;
      if (filter.poziom && p.poziom !== filter.poziom) return false;
      if (filter.typ && p.typ !== filter.typ) return false;
      if (filter.umiejetnosc && (p.umiejetnosci || []).indexOf(filter.umiejetnosc) === -1) return false;
      return true;
    });
  }

  function fiszkiTematu(tematId) {
    return store.fiszki.filter(function (f) { return f.tematId === tematId; });
  }

  function fiszkiDzialu(dzialId) {
    return store.fiszki.filter(function (f) { return f.dzialId === dzialId; });
  }

  function wszystkieFiszki() {
    return store.fiszki.slice();
  }

  function fiszka(id) {
    return store.fiszki.find(function (f) { return f.id === id; }) || null;
  }

  function diagram(id) {
    var fn = store.diagramy[id];
    if (!fn) {
      console.error('[content] Brak diagramu o id:', id);
      return '<svg viewBox="0 0 100 40"><text x="10" y="20" font-size="8">Brak diagramu: ' + id + '</text></svg>';
    }
    return fn();
  }

  function doswiadczenia() {
    return store.doswiadczenia.slice();
  }

  function doswiadczenie(id) {
    return store.doswiadczenia.find(function (d) { return d.id === id; }) || null;
  }

  function analizaDanychLista(typ) {
    return store.analizaDanych.filter(function (a) { return !typ || a.typ === typ; });
  }

  function analizaDanychItem(id) {
    return store.analizaDanych.find(function (a) { return a.id === id; }) || null;
  }

  function budowaFunkcjaLista() {
    return store.budowaFunkcja.slice();
  }

  function egzaminy(typ) {
    return store.egzaminy.filter(function (e) { return !typ || e.typ === typ; });
  }

  function egzamin(id) {
    return store.egzaminy.find(function (e) { return e.id === id; }) || null;
  }

  function osiagniecia() {
    return store.osiagniecia.slice();
  }

  window.App.content.queries = {
    dzialy: dzialy,
    dzial: dzial,
    tematyDzialu: tematyDzialu,
    podtematyTematu: podtematyTematu,
    temat: temat,
    wszystkieTematyDzialu: wszystkieTematyDzialu,
    lekcjeTematu: lekcjeTematu,
    lekcja: lekcja,
    pytanie: pytanie,
    pytaniaByIds: pytaniaByIds,
    pytaniaTematu: pytaniaTematu,
    pytaniaDzialu: pytaniaDzialu,
    filtrujPytania: filtrujPytania,
    fiszkiTematu: fiszkiTematu,
    fiszkiDzialu: fiszkiDzialu,
    wszystkieFiszki: wszystkieFiszki,
    fiszka: fiszka,
    diagram: diagram,
    doswiadczenia: doswiadczenia,
    doswiadczenie: doswiadczenie,
    analizaDanychLista: analizaDanychLista,
    analizaDanychItem: analizaDanychItem,
    budowaFunkcjaLista: budowaFunkcjaLista,
    egzaminy: egzaminy,
    egzamin: egzamin,
    osiagniecia: osiagniecia,
  };
})();
