(function () {
  'use strict';
  var storage = window.App.db.storage;
  var KEY = 'progress';

  function defaults() {
    return {
      lekcje: {}, // lekcjaId -> { ukonczona: bool, dataOstatniej: iso, liczbaOdslon: n }
      tematy: {}, // tematId -> { prob: n, poprawne: n, punkty: n, maxPunkty: n }
    };
  }

  function all() {
    return storage.get(KEY, defaults());
  }

  function markLekcjaUkonczona(lekcjaId) {
    return storage.update(KEY, defaults(), function (state) {
      var entry = state.lekcje[lekcjaId] || { liczbaOdslon: 0 };
      entry.ukonczona = true;
      entry.dataOstatniej = new Date().toISOString();
      entry.liczbaOdslon = (entry.liczbaOdslon || 0) + 1;
      state.lekcje[lekcjaId] = entry;
      return state;
    });
  }

  function markLekcjaOdslona(lekcjaId) {
    return storage.update(KEY, defaults(), function (state) {
      var entry = state.lekcje[lekcjaId] || { ukonczona: false, liczbaOdslon: 0 };
      entry.liczbaOdslon = (entry.liczbaOdslon || 0) + 1;
      entry.dataOstatniej = new Date().toISOString();
      state.lekcje[lekcjaId] = entry;
      return state;
    });
  }

  function isLekcjaUkonczona(lekcjaId) {
    var state = all();
    return !!(state.lekcje[lekcjaId] && state.lekcje[lekcjaId].ukonczona);
  }

  function recordAnswers(tematId, poprawne, liczba, punkty, maxPunkty) {
    return storage.update(KEY, defaults(), function (state) {
      var entry = state.tematy[tematId] || { prob: 0, poprawne: 0, punkty: 0, maxPunkty: 0 };
      entry.prob += liczba;
      entry.poprawne += poprawne;
      entry.punkty += punkty || 0;
      entry.maxPunkty += maxPunkty || 0;
      state.tematy[tematId] = entry;
      return state;
    });
  }

  function tematSkutecznosc(tematId) {
    var state = all();
    var entry = state.tematy[tematId];
    if (!entry || entry.prob === 0) return null;
    return Math.round((entry.poprawne / entry.prob) * 100);
  }

  function dzialPostep(tematyIds) {
    var state = all();
    var totalProb = 0;
    var totalPoprawne = 0;
    tematyIds.forEach(function (id) {
      var entry = state.tematy[id];
      if (entry) {
        totalProb += entry.prob;
        totalPoprawne += entry.poprawne;
      }
    });
    if (totalProb === 0) return 0;
    return Math.round((totalPoprawne / totalProb) * 100);
  }

  function slabeTematy(tematyIds, threshold) {
    var state = all();
    threshold = threshold || 60;
    return tematyIds
      .map(function (id) {
        var entry = state.tematy[id];
        if (!entry || entry.prob < 3) return null;
        var skutecznosc = Math.round((entry.poprawne / entry.prob) * 100);
        return skutecznosc < threshold ? { tematId: id, skutecznosc: skutecznosc, prob: entry.prob } : null;
      })
      .filter(Boolean)
      .sort(function (a, b) {
        return a.skutecznosc - b.skutecznosc;
      });
  }

  function mocneTematy(tematyIds, threshold) {
    var state = all();
    threshold = threshold || 80;
    return tematyIds
      .map(function (id) {
        var entry = state.tematy[id];
        if (!entry || entry.prob < 3) return null;
        var skutecznosc = Math.round((entry.poprawne / entry.prob) * 100);
        return skutecznosc >= threshold ? { tematId: id, skutecznosc: skutecznosc, prob: entry.prob } : null;
      })
      .filter(Boolean)
      .sort(function (a, b) {
        return b.skutecznosc - a.skutecznosc;
      });
  }

  window.App.db.progressRepo = {
    all: all,
    markLekcjaUkonczona: markLekcjaUkonczona,
    markLekcjaOdslona: markLekcjaOdslona,
    isLekcjaUkonczona: isLekcjaUkonczona,
    recordAnswers: recordAnswers,
    tematSkutecznosc: tematSkutecznosc,
    dzialPostep: dzialPostep,
    slabeTematy: slabeTematy,
    mocneTematy: mocneTematy,
  };
})();
