(function () {
  'use strict';
  var storage = window.App.db.storage;
  var utils = window.App.core.utils;
  var KEY = 'gamifikacja';

  function defaults() {
    return {
      xp: 0,
      seriaDni: 0,
      najdluzszaSeria: 0,
      ostatniaAktywnoscData: null,
      odznaki: [], // { id, data }
      celDzienny: { docelowyXp: 50, xpDzisiaj: 0, data: utils.todayISODate() },
      celTygodniowy: { docelowyDni: 5, dniAktywne: [] }, // lista dat ISO w bieżącym tygodniu
    };
  }

  function state() {
    var s = storage.get(KEY, defaults());
    // reset dziennego licznika XP jeśli zmienił się dzień
    if (s.celDzienny.data !== utils.todayISODate()) {
      s.celDzienny.data = utils.todayISODate();
      s.celDzienny.xpDzisiaj = 0;
      storage.set(KEY, s);
    }
    return s;
  }

  function poziomZXp(xp) {
    var poziom = 1;
    var pozostale = xp;
    var potrzebne = 100;
    while (pozostale >= potrzebne) {
      pozostale -= potrzebne;
      poziom += 1;
      potrzebne = 100 + (poziom - 1) * 50;
    }
    return { poziom: poziom, xpWPoziomie: pozostale, xpDoNastepnego: potrzebne };
  }

  function rejestrujAktywnosc() {
    return storage.update(KEY, defaults(), function (s) {
      var today = utils.todayISODate();
      if (s.ostatniaAktywnoscData === today) return s;
      if (s.ostatniaAktywnoscData) {
        var diff = utils.daysBetween(s.ostatniaAktywnoscData, today);
        if (diff === 1) {
          s.seriaDni += 1;
        } else if (diff > 1) {
          s.seriaDni = 1;
        }
      } else {
        s.seriaDni = 1;
      }
      s.najdluzszaSeria = Math.max(s.najdluzszaSeria || 0, s.seriaDni);
      s.ostatniaAktywnoscData = today;
      if (s.celTygodniowy.dniAktywne.indexOf(today) === -1) {
        var monday = getMondayISO(today);
        s.celTygodniowy.dniAktywne = s.celTygodniowy.dniAktywne
          .filter(function (d) {
            return d >= monday;
          })
          .concat([today]);
      }
      return s;
    });
  }

  function getMondayISO(iso) {
    var d = new Date(iso);
    var day = d.getDay();
    var diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d.toISOString().slice(0, 10);
  }

  function dodajXp(kwota) {
    rejestrujAktywnosc();
    return storage.update(KEY, defaults(), function (s) {
      s.xp += kwota;
      if (s.celDzienny.data !== utils.todayISODate()) {
        s.celDzienny.data = utils.todayISODate();
        s.celDzienny.xpDzisiaj = 0;
      }
      s.celDzienny.xpDzisiaj += kwota;
      return s;
    });
  }

  function przyznajOdznake(id) {
    var s = state();
    if (s.odznaki.some(function (o) { return o.id === id; })) return s;
    return storage.update(KEY, defaults(), function (st) {
      st.odznaki.push({ id: id, data: new Date().toISOString() });
      return st;
    });
  }

  function maOdznake(id) {
    return state().odznaki.some(function (o) {
      return o.id === id;
    });
  }

  window.App.db.gamificationRepo = {
    state: state,
    poziomZXp: poziomZXp,
    dodajXp: dodajXp,
    rejestrujAktywnosc: rejestrujAktywnosc,
    przyznajOdznake: przyznajOdznake,
    maOdznake: maOdznake,
  };
})();
