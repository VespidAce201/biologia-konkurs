(function () {
  'use strict';

  function arraysEqualAsSets(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort();
    var sb = b.slice().sort();
    return sa.every(function (v, i) {
      return v === sb[i];
    });
  }

  function normalizeText(s) {
    return String(s || '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');
  }

  /**
   * Sprawdza odpowiedź użytkownika dla dowolnego typu pytania.
   * @returns {{poprawna: boolean, czesciowa: boolean, ulamekPoprawnosci: number, punktyUzyskane: number}}
   */
  function checkAnswer(pytanie, odpowiedz) {
    var typ = pytanie.typ;
    var punkty = pytanie.punkty || 1;
    var ulamek = 0;

    if (typ === 'matching' && pytanie.dopasowanie) {
      var pary = pytanie.dopasowanie.pary;
      var poprawneLiczba = 0;
      pary.forEach(function (correctIdx, i) {
        if (odpowiedz && odpowiedz[i] === correctIdx) poprawneLiczba++;
      });
      ulamek = poprawneLiczba / pary.length;
    } else if (typ === 'gapfill' && pytanie.odpowiedziLuk) {
      var klucze = Object.keys(pytanie.odpowiedziLuk);
      var trafione = 0;
      klucze.forEach(function (k) {
        var oczekiwana = pytanie.odpowiedziLuk[k];
        var podana = (odpowiedz && odpowiedz[k]) || '';
        var listaAkceptowanych = Array.isArray(oczekiwana) ? oczekiwana : [oczekiwana];
        if (listaAkceptowanych.some(function (v) { return normalizeText(v) === normalizeText(podana); })) {
          trafione++;
        }
      });
      ulamek = trafione / klucze.length;
    } else if (typ === 'ordering' && pytanie.elementy) {
      var n = pytanie.elementy.length;
      var poprawnaKolejnosc = pytanie.elementy.map(function (_, i) { return i; });
      var trafionePoz = 0;
      poprawnaKolejnosc.forEach(function (correctIdx, pos) {
        if (odpowiedz && odpowiedz[pos] === correctIdx) trafionePoz++;
      });
      ulamek = trafionePoz / n;
    } else if (Array.isArray(pytanie.poprawna)) {
      // multiple choice
      var odp = odpowiedz || [];
      ulamek = arraysEqualAsSets(odp, pytanie.poprawna) ? 1 : 0;
    } else {
      // single / truefalse / image / diagram / table / chart z pojedynczą poprawną odpowiedzią
      ulamek = odpowiedz === pytanie.poprawna ? 1 : 0;
    }

    var punktyUzyskane = Math.round(ulamek * punkty * 100) / 100;
    return {
      poprawna: ulamek === 1,
      czesciowa: ulamek > 0 && ulamek < 1,
      ulamekPoprawnosci: ulamek,
      punktyUzyskane: punktyUzyskane,
    };
  }

  window.App.modules = window.App.modules || {};
  window.App.modules.scoringEngine = { checkAnswer: checkAnswer, normalizeText: normalizeText };
})();
