/**
 * Silnik sesji egzaminacyjnej / quizowej z limitem czasu, nawigacją między pytaniami
 * i oznaczaniem pytań do powrotu. Używany zarówno przez zwykłe quizy (bez limitu czasu),
 * egzaminy próbne, jak i pełną symulację konkursu (40 pkt / 60 min).
 */
(function () {
  'use strict';
  var scoringEngine = window.App.modules.scoringEngine;

  function createSession(pytania, opts) {
    opts = opts || {};
    var limitSek = opts.limitCzasuMin ? opts.limitCzasuMin * 60 : null;
    var state = {
      pytania: pytania,
      indeks: 0,
      odpowiedzi: {}, // pytanieId -> odpowiedź
      oznaczone: {}, // pytanieId -> bool
      sprawdzone: {}, // pytanieId -> bool (czy pokazano wynik - dla trybu quiz z natychmiastową informacją zwrotną)
      pozostalyCzasSek: limitSek,
      rozpoczetyO: Date.now(),
      zakonczony: false,
    };
    var timerHandle = null;
    var listeners = window.App.core.createEmitter();

    function tick() {
      if (state.pozostalyCzasSek === null) return;
      state.pozostalyCzasSek -= 1;
      listeners.emit('tick', state.pozostalyCzasSek);
      if (state.pozostalyCzasSek <= 0) {
        finish('czas');
      }
    }

    function start() {
      if (limitSek !== null) {
        timerHandle = setInterval(tick, 1000);
      }
    }

    function stopTimer() {
      if (timerHandle) {
        clearInterval(timerHandle);
        timerHandle = null;
      }
    }

    function setAnswer(pytanieId, odpowiedz) {
      state.odpowiedzi[pytanieId] = odpowiedz;
      listeners.emit('answer', { pytanieId: pytanieId, odpowiedz: odpowiedz });
    }

    function toggleFlag(pytanieId) {
      state.oznaczone[pytanieId] = !state.oznaczone[pytanieId];
      listeners.emit('flag', { pytanieId: pytanieId, oznaczone: state.oznaczone[pytanieId] });
    }

    function goto(index) {
      if (index < 0 || index >= state.pytania.length) return;
      state.indeks = index;
      listeners.emit('navigate', index);
    }

    function next() {
      goto(state.indeks + 1);
    }

    function prev() {
      goto(state.indeks - 1);
    }

    function markChecked(pytanieId) {
      state.sprawdzone[pytanieId] = true;
    }

    function liczbaOdpowiedzianych() {
      return Object.keys(state.odpowiedzi).length;
    }

    function wynik() {
      var maxPunkty = 0;
      var uzyskanePunkty = 0;
      var poprawneLiczba = 0;
      var szczegoly = state.pytania.map(function (p) {
        maxPunkty += p.punkty || 1;
        var odp = state.odpowiedzi[p.id];
        var check = scoringEngine.checkAnswer(p, odp);
        uzyskanePunkty += check.punktyUzyskane;
        if (check.poprawna) poprawneLiczba++;
        return { pytanieId: p.id, odpowiedz: odp, check: check };
      });
      return {
        maxPunkty: Math.round(maxPunkty * 100) / 100,
        uzyskanePunkty: Math.round(uzyskanePunkty * 100) / 100,
        poprawneLiczba: poprawneLiczba,
        liczbaPytan: state.pytania.length,
        procent: window.App.core.utils.percent(uzyskanePunkty, maxPunkty),
        czasSek: Math.round((Date.now() - state.rozpoczetyO) / 1000),
        szczegoly: szczegoly,
      };
    }

    function finish(powod) {
      if (state.zakonczony) return wynik();
      state.zakonczony = true;
      stopTimer();
      var w = wynik();
      listeners.emit('finish', { powod: powod || 'reczne', wynik: w });
      return w;
    }

    return {
      state: state,
      on: listeners.on,
      start: start,
      setAnswer: setAnswer,
      toggleFlag: toggleFlag,
      goto: goto,
      next: next,
      prev: prev,
      markChecked: markChecked,
      liczbaOdpowiedzianych: liczbaOdpowiedzianych,
      wynik: wynik,
      finish: finish,
      stopTimer: stopTimer,
    };
  }

  window.App.modules.examEngine = { createSession: createSession };
})();
