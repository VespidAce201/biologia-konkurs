(function () {
  'use strict';
  var gamificationRepo = window.App.db.gamificationRepo;
  var resultsRepo = window.App.db.resultsRepo;
  var progressRepo = window.App.db.progressRepo;
  var srsRepo = window.App.db.srsRepo;
  var ui = null; // wstrzykiwane leniwie, żeby uniknąć zależności cyklicznej przy ładowaniu

  var XP = {
    LEKCJA_UKONCZONA: 15,
    ODPOWIEDZ_POPRAWNA: 3,
    QUIZ_UKONCZONY: 10,
    FISZKA_PRZEJRZANA: 2,
    EGZAMIN_UKONCZONY: 40,
    DOSWIADCZENIE_UKONCZONE: 12,
    ANALIZA_UKONCZONA: 8,
  };

  var DEFINICJE_ODZNAK = [
    { id: 'pierwszy-krok', nazwa: 'Pierwszy krok', opis: 'Ukończ swoją pierwszą lekcję.', ikona: 'leaf' },
    { id: 'zapalony-czytelnik', nazwa: 'Zapalony czytelnik', opis: 'Ukończ 10 lekcji.', ikona: 'book' },
    { id: 'znawca-teorii', nazwa: 'Znawca teorii', opis: 'Ukończ wszystkie lekcje w dziale.', ikona: 'trophy' },
    { id: 'pierwszy-quiz', nazwa: 'Pierwszy quiz', opis: 'Rozwiąż swój pierwszy quiz.', ikona: 'quiz' },
    { id: 'perfekcjonista', nazwa: 'Perfekcjonista', opis: 'Zdobądź 100% w quizie.', ikona: 'star' },
    { id: 'fiszkomaniak', nazwa: 'Fiszkomaniak', opis: 'Przejrzyj 50 fiszek.', ikona: 'cards' },
    { id: 'mistrz-powtorek', nazwa: 'Mistrz powtórek', opis: 'Opanuj 30 fiszek.', ikona: 'refresh' },
    { id: 'seria-3', nazwa: 'Trzy dni z rzędu', opis: 'Ucz się 3 dni z rzędu.', ikona: 'flame' },
    { id: 'seria-7', nazwa: 'Tydzień nauki', opis: 'Ucz się 7 dni z rzędu.', ikona: 'flame' },
    { id: 'seria-30', nazwa: 'Żelazna konsekwencja', opis: 'Ucz się 30 dni z rzędu.', ikona: 'flame' },
    { id: 'naukowiec', nazwa: 'Młody naukowiec', opis: 'Ukończ 5 scenariuszy doświadczeń.', ikona: 'flask' },
    { id: 'analityk', nazwa: 'Analityk danych', opis: 'Ukończ 10 ćwiczeń analizy danych.', ikona: 'chart' },
    { id: 'pierwszy-egzamin', nazwa: 'Próba generalna', opis: 'Ukończ swój pierwszy egzamin próbny.', ikona: 'clock' },
    { id: 'mistrz-konkursu', nazwa: 'Mistrz konkursu', opis: 'Zdobądź co najmniej 32/40 pkt w symulacji konkursu.', ikona: 'trophy' },
    { id: 'wszechstronny', nazwa: 'Wszechstronny', opis: 'Rozwiąż quiz z każdego działu.', ikona: 'shield' },
    { id: 'poziom-5', nazwa: 'Poziom 5', opis: 'Osiągnij 5. poziom doświadczenia.', ikona: 'star' },
    { id: 'poziom-10', nazwa: 'Poziom 10', opis: 'Osiągnij 10. poziom doświadczenia.', ikona: 'star' },
  ];

  function przyznaj(id) {
    var mial = gamificationRepo.maOdznake(id);
    gamificationRepo.przyznajOdznake(id);
    if (!mial) {
      var def = DEFINICJE_ODZNAK.find(function (d) { return d.id === id; });
      window.App.core.events.emit('achievement:granted', def);
    }
  }

  function poLekcjiUkonczonej() {
    gamificationRepo.dodajXp(XP.LEKCJA_UKONCZONA);
    var stan = window.App.db.progressRepo.all();
    var liczbaUkonczonych = Object.keys(stan.lekcje).filter(function (id) { return stan.lekcje[id].ukonczona; }).length;
    if (liczbaUkonczonych >= 1) przyznaj('pierwszy-krok');
    if (liczbaUkonczonych >= 10) przyznaj('zapalony-czytelnik');
    sprawdzPoziomy();
  }

  function poOdpowiedzi(poprawna) {
    if (poprawna) gamificationRepo.dodajXp(XP.ODPOWIEDZ_POPRAWNA);
  }

  function poQuizUkonczony(wynikProcent) {
    gamificationRepo.dodajXp(XP.QUIZ_UKONCZONY);
    var wyniki = resultsRepo.wynikiQuizow();
    if (wyniki.length >= 1) przyznaj('pierwszy-quiz');
    if (wynikProcent >= 100) przyznaj('perfekcjonista');
    var dzialyOdpowiedziane = {};
    wyniki.forEach(function (w) { if (w.dzialId) dzialyOdpowiedziane[w.dzialId] = true; });
    if (Object.keys(dzialyOdpowiedziane).length >= window.App.content.queries.dzialy().length) przyznaj('wszechstronny');
    sprawdzPoziomy();
  }

  function poFiszce() {
    gamificationRepo.dodajXp(XP.FISZKA_PRZEJRZANA);
    var wszystkie = window.App.content.queries.wszystkieFiszki().map(function (f) { return f.id; });
    var statystyki = srsRepo.statystykiFiszek(wszystkie);
    var razemOcenionych = statystyki.ucze + statystyki.opanowane;
    if (razemOcenionych >= 50) przyznaj('fiszkomaniak');
    if (statystyki.opanowane >= 30) przyznaj('mistrz-powtorek');
    sprawdzPoziomy();
  }

  function poEgzaminie(punkty, maxPunkty, examTyp) {
    gamificationRepo.dodajXp(XP.EGZAMIN_UKONCZONY);
    var wszystkie = resultsRepo.wynikiEgzaminow();
    if (wszystkie.length >= 1) przyznaj('pierwszy-egzamin');
    if (examTyp === 'konkursowy' && punkty >= 32) przyznaj('mistrz-konkursu');
    sprawdzPoziomy();
  }

  function poDoswiadczeniu() {
    gamificationRepo.dodajXp(XP.DOSWIADCZENIE_UKONCZONE);
    sprawdzPoziomy();
  }

  function poAnalizieDanych() {
    gamificationRepo.dodajXp(XP.ANALIZA_UKONCZONA);
    sprawdzPoziomy();
  }

  function sprawdzSerie() {
    var stan = gamificationRepo.state();
    if (stan.seriaDni >= 3) przyznaj('seria-3');
    if (stan.seriaDni >= 7) przyznaj('seria-7');
    if (stan.seriaDni >= 30) przyznaj('seria-30');
  }

  function sprawdzPoziomy() {
    var stan = gamificationRepo.state();
    var poziom = gamificationRepo.poziomZXp(stan.xp).poziom;
    if (poziom >= 5) przyznaj('poziom-5');
    if (poziom >= 10) przyznaj('poziom-10');
    sprawdzSerie();
  }

  window.App.modules.gamificationEngine = {
    XP: XP,
    DEFINICJE_ODZNAK: DEFINICJE_ODZNAK,
    poLekcjiUkonczonej: poLekcjiUkonczonej,
    poOdpowiedzi: poOdpowiedzi,
    poQuizUkonczony: poQuizUkonczony,
    poFiszce: poFiszce,
    poEgzaminie: poEgzaminie,
    poDoswiadczeniu: poDoswiadczeniu,
    poAnalizieDanych: poAnalizieDanych,
    sprawdzPoziomy: sprawdzPoziomy,
  };
})();
