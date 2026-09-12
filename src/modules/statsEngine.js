(function () {
  'use strict';
  var queries = window.App.content.queries;
  var progressRepo = window.App.db.progressRepo;
  var resultsRepo = window.App.db.resultsRepo;
  var srsRepo = window.App.db.srsRepo;
  var gamificationRepo = window.App.db.gamificationRepo;

  function ogolnyPostep() {
    var dzialy = queries.dzialy();
    var wszystkieLekcje = [];
    dzialy.forEach(function (d) {
      queries.wszystkieTematyDzialu(d.id).forEach(function (t) {
        wszystkieLekcje = wszystkieLekcje.concat(queries.lekcjeTematu(t.id));
      });
    });
    var stanPostepu = progressRepo.all();
    var ukonczone = wszystkieLekcje.filter(function (l) {
      return stanPostepu.lekcje[l.id] && stanPostepu.lekcje[l.id].ukonczona;
    }).length;
    return {
      lekcjeUkonczone: ukonczone,
      lekcjeLacznie: wszystkieLekcje.length,
      procent: window.App.core.utils.percent(ukonczone, wszystkieLekcje.length),
    };
  }

  function postepDzialu(dzialId) {
    var tematy = queries.wszystkieTematyDzialu(dzialId);
    var lekcje = [];
    tematy.forEach(function (t) {
      lekcje = lekcje.concat(queries.lekcjeTematu(t.id));
    });
    var stanPostepu = progressRepo.all();
    var ukonczoneLekcje = lekcje.filter(function (l) { return stanPostepu.lekcje[l.id] && stanPostepu.lekcje[l.id].ukonczona; }).length;
    var skutecznoscPytan = progressRepo.dzialPostep(tematy.map(function (t) { return t.id; }));
    return {
      lekcjeUkonczone: ukonczoneLekcje,
      lekcjeLacznie: lekcje.length,
      procentLekcji: window.App.core.utils.percent(ukonczoneLekcje, lekcje.length),
      skutecznoscPytan: skutecznoscPytan,
    };
  }

  function podsumowanieQuizow() {
    var wyniki = resultsRepo.wynikiQuizow();
    var lacznePytania = 0;
    var lacznePoprawne = 0;
    wyniki.forEach(function (w) {
      lacznePytania += w.liczbaPytan;
      lacznePoprawne += w.poprawne;
    });
    return {
      liczbaQuizow: wyniki.length,
      lacznePytania: lacznePytania,
      lacznePoprawne: lacznePoprawne,
      sredniaSkutecznosc: window.App.core.utils.percent(lacznePoprawne, lacznePytania),
    };
  }

  function podsumowanieFiszek() {
    var wszystkie = queries.wszystkieFiszki().map(function (f) { return f.id; });
    return srsRepo.statystykiFiszek(wszystkie);
  }

  function slabeIMocneTematy() {
    var dzialy = queries.dzialy();
    var wszystkieTematy = [];
    dzialy.forEach(function (d) {
      wszystkieTematy = wszystkieTematy.concat(queries.wszystkieTematyDzialu(d.id));
    });
    var ids = wszystkieTematy.map(function (t) { return t.id; });
    return {
      slabe: progressRepo.slabeTematy(ids, 60),
      mocne: progressRepo.mocneTematy(ids, 80),
    };
  }

  function pelnePodsumowanie() {
    var dzialy = queries.dzialy().map(function (d) {
      return Object.assign({ dzial: d }, postepDzialu(d.id));
    });
    return {
      ogolny: ogolnyPostep(),
      dzialy: dzialy,
      quizy: podsumowanieQuizow(),
      egzaminy: resultsRepo.wynikiEgzaminow(),
      fiszki: podsumowanieFiszek(),
      czasNaukiLacznie: resultsRepo.czasNaukiLacznie(),
      czasNaukiOstatnie7: resultsRepo.czasNaukiOstatnieDni(7),
      slabeIMocne: slabeIMocneTematy(),
      gamifikacja: gamificationRepo.state(),
    };
  }

  window.App.modules.statsEngine = {
    ogolnyPostep: ogolnyPostep,
    postepDzialu: postepDzialu,
    podsumowanieQuizow: podsumowanieQuizow,
    podsumowanieFiszek: podsumowanieFiszek,
    slabeIMocneTematy: slabeIMocneTematy,
    pelnePodsumowanie: pelnePodsumowanie,
  };
})();
