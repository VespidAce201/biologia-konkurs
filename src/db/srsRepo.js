(function () {
  'use strict';
  var storage = window.App.db.storage;
  var utils = window.App.core.utils;
  var FISZKI_KEY = 'srs_fiszki';
  var BLEDY_KEY = 'srs_bledy_pytan';

  // Uproszczony algorytm powtórek oparty na idei SM-2 (bez zależności zewnętrznych).
  // Oceny: 0 = nie umiem, 1 = trudne, 2 = umiem.
  var INTERVALS_DNI = [0, 1, 3, 7, 14, 30, 60, 120];

  function fiszkiState() {
    return storage.get(FISZKI_KEY, {});
  }

  function fiszkaState(fiszkaId) {
    var state = fiszkiState();
    return (
      state[fiszkaId] || {
        stan: 'nowa',
        etap: 0,
        ease: 2.3,
        due: utils.todayISODate(),
        historia: [],
        poprawneZRzedu: 0,
      }
    );
  }

  function ocenFiszke(fiszkaId, ocena) {
    return storage.update(FISZKI_KEY, {}, function (state) {
      var entry = state[fiszkaId] || {
        stan: 'nowa',
        etap: 0,
        ease: 2.3,
        due: utils.todayISODate(),
        historia: [],
        poprawneZRzedu: 0,
      };
      if (ocena === 0) {
        entry.etap = 0;
        entry.poprawneZRzedu = 0;
        entry.stan = 'ucze-sie';
        entry.ease = utils.clamp(entry.ease - 0.2, 1.3, 3.0);
      } else if (ocena === 1) {
        entry.etap = utils.clamp(entry.etap, 0, 1);
        entry.poprawneZRzedu = 0;
        entry.stan = 'ucze-sie';
      } else {
        entry.etap = utils.clamp(entry.etap + 1, 0, INTERVALS_DNI.length - 1);
        entry.poprawneZRzedu = (entry.poprawneZRzedu || 0) + 1;
        entry.ease = utils.clamp(entry.ease + 0.1, 1.3, 3.0);
        entry.stan = entry.poprawneZRzedu >= 3 && entry.etap >= 4 ? 'opanowana' : 'ucze-sie';
      }
      var dniDoNastepnej = Math.round(INTERVALS_DNI[entry.etap] * (ocena === 2 ? entry.ease / 2.3 : 1));
      var due = new Date();
      due.setDate(due.getDate() + Math.max(0, dniDoNastepnej));
      entry.due = due.toISOString().slice(0, 10);
      entry.historia = (entry.historia || []).concat([{ data: new Date().toISOString(), ocena: ocena }]).slice(-20);
      state[fiszkaId] = entry;
      return state;
    });
  }

  function fiszkiDoPowtorki(allFiszkiIds) {
    var state = fiszkiState();
    var today = utils.todayISODate();
    return allFiszkiIds.filter(function (id) {
      var entry = state[id];
      if (!entry) return true; // nowa fiszka
      return entry.due <= today;
    });
  }

  function statystykiFiszek(allFiszkiIds) {
    var state = fiszkiState();
    var nowe = 0,
      ucze = 0,
      opanowane = 0;
    allFiszkiIds.forEach(function (id) {
      var entry = state[id];
      if (!entry || entry.stan === 'nowa') nowe++;
      else if (entry.stan === 'opanowana') opanowane++;
      else ucze++;
    });
    return { nowe: nowe, ucze: ucze, opanowane: opanowane, razem: allFiszkiIds.length };
  }

  // Powtórki błędów (pytania quizowe / egzaminacyjne)
  function bledyState() {
    return storage.get(BLEDY_KEY, {});
  }

  function zapiszBlad(pytanieId, meta) {
    return storage.update(BLEDY_KEY, {}, function (state) {
      var entry = state[pytanieId] || {
        liczbaBledow: 0,
        tematId: meta.tematId,
        dzialId: meta.dzialId,
        poziom: meta.poziom,
      };
      entry.liczbaBledow += 1;
      entry.ostatniaOdpowiedz = meta.ostatniaOdpowiedz;
      entry.dataOstatniejProby = new Date().toISOString();
      entry.rozwiazane = false;
      state[pytanieId] = entry;
      return state;
    });
  }

  function oznaczRozwiazane(pytanieId) {
    return storage.update(BLEDY_KEY, {}, function (state) {
      if (state[pytanieId]) {
        state[pytanieId].rozwiazane = true;
        state[pytanieId].dataRozwiazania = new Date().toISOString();
      }
      return state;
    });
  }

  function pytaniaDoPowtorki() {
    var state = bledyState();
    return Object.keys(state)
      .filter(function (id) {
        return !state[id].rozwiazane;
      })
      .sort(function (a, b) {
        return state[b].liczbaBledow - state[a].liczbaBledow;
      });
  }

  function priorytetoweTematy(minBledow) {
    var state = bledyState();
    minBledow = minBledow || 3;
    var byTemat = {};
    Object.keys(state).forEach(function (pid) {
      var e = state[pid];
      if (e.rozwiazane) return;
      byTemat[e.tematId] = (byTemat[e.tematId] || 0) + e.liczbaBledow;
    });
    return Object.keys(byTemat)
      .filter(function (t) {
        return byTemat[t] >= minBledow;
      })
      .map(function (t) {
        return { tematId: t, liczbaBledow: byTemat[t] };
      })
      .sort(function (a, b) {
        return b.liczbaBledow - a.liczbaBledow;
      });
  }

  window.App.db.srsRepo = {
    fiszkaState: fiszkaState,
    ocenFiszke: ocenFiszke,
    fiszkiDoPowtorki: fiszkiDoPowtorki,
    statystykiFiszek: statystykiFiszek,
    zapiszBlad: zapiszBlad,
    oznaczRozwiazane: oznaczRozwiazane,
    pytaniaDoPowtorki: pytaniaDoPowtorki,
    priorytetoweTematy: priorytetoweTematy,
    bledyState: bledyState,
  };
})();
