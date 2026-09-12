(function () {
  'use strict';
  var storage = window.App.db.storage;
  var utils = window.App.core.utils;
  var QUIZ_KEY = 'wyniki_quizow';
  var EGZ_KEY = 'wyniki_egzaminow';
  var CZAS_KEY = 'log_czasu_nauki';

  function zapiszWynikQuizu(wynik) {
    return storage.update(QUIZ_KEY, [], function (list) {
      list.unshift(Object.assign({ id: utils.uid('quiz') , data: new Date().toISOString() }, wynik));
      return list.slice(0, 200);
    });
  }

  function wynikiQuizow() {
    return storage.get(QUIZ_KEY, []);
  }

  function zapiszWynikEgzaminu(wynik) {
    return storage.update(EGZ_KEY, [], function (list) {
      list.unshift(Object.assign({ id: utils.uid('egz'), data: new Date().toISOString() }, wynik));
      return list;
    });
  }

  function wynikiEgzaminow() {
    return storage.get(EGZ_KEY, []);
  }

  function ostatniWynikEgzaminu(examId) {
    var list = wynikiEgzaminow().filter(function (w) {
      return w.examId === examId;
    });
    return list[0] || null;
  }

  function dodajCzasNauki(minuty) {
    var today = utils.todayISODate();
    return storage.update(CZAS_KEY, {}, function (log) {
      log[today] = (log[today] || 0) + minuty;
      return log;
    });
  }

  function czasNaukiLacznie() {
    var log = storage.get(CZAS_KEY, {});
    return Object.keys(log).reduce(function (sum, k) {
      return sum + log[k];
    }, 0);
  }

  function czasNaukiDzisiaj() {
    var log = storage.get(CZAS_KEY, {});
    return log[utils.todayISODate()] || 0;
  }

  function czasNaukiOstatnieDni(n) {
    var log = storage.get(CZAS_KEY, {});
    var out = [];
    for (var i = n - 1; i >= 0; i--) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      var iso = d.toISOString().slice(0, 10);
      out.push({ data: iso, minuty: log[iso] || 0 });
    }
    return out;
  }

  window.App.db.resultsRepo = {
    zapiszWynikQuizu: zapiszWynikQuizu,
    wynikiQuizow: wynikiQuizow,
    zapiszWynikEgzaminu: zapiszWynikEgzaminu,
    wynikiEgzaminow: wynikiEgzaminow,
    ostatniWynikEgzaminu: ostatniWynikEgzaminu,
    dodajCzasNauki: dodajCzasNauki,
    czasNaukiLacznie: czasNaukiLacznie,
    czasNaukiDzisiaj: czasNaukiDzisiaj,
    czasNaukiOstatnieDni: czasNaukiOstatnieDni,
  };
})();
