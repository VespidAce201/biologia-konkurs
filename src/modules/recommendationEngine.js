/**
 * Klasyczny (bez AI), oparty na regułach system rekomendacji nauki.
 * Reguły — patrz specyfikacja projektu, sekcja 22:
 *  - skuteczność tematu < 60%  -> poleć ponowną lekcję
 *  - 60-80%                    -> poleć quiz
 *  - > 80%                     -> poleć trudniejsze pytania
 *  - wielokrotne te same błędy  -> temat trafia do priorytetowych powtórek
 */
(function () {
  'use strict';
  var progressRepo = window.App.db.progressRepo;
  var srsRepo = window.App.db.srsRepo;
  var queries = window.App.content.queries;

  function rekomendacjaDlaTematu(tematId) {
    var skutecznosc = progressRepo.tematSkutecznosc(tematId);
    if (skutecznosc === null) {
      return { typ: 'rozpocznij', tekst: 'Zacznij od lekcji, aby poznać ten temat.', skutecznosc: null };
    }
    if (skutecznosc < 60) {
      return { typ: 'lekcja', tekst: 'Wróć do lekcji — powtórz materiał, zanim spróbujesz ponownie.', skutecznosc: skutecznosc };
    }
    if (skutecznosc <= 80) {
      return { typ: 'quiz', tekst: 'Solidna podstawa — rozwiąż kolejny quiz, aby ją utrwalić.', skutecznosc: skutecznosc };
    }
    return { typ: 'trudniejsze', tekst: 'Świetny wynik! Spróbuj pytań na poziomie trudnym lub konkursowym.', skutecznosc: skutecznosc };
  }

  function globalneRekomendacje() {
    var dzialy = queries.dzialy();
    var out = [];

    var priorytetowe = srsRepo.priorytetoweTematy(3);
    priorytetowe.forEach(function (p) {
      var temat = queries.temat(p.tematId);
      if (!temat) return;
      out.push({
        typ: 'priorytet',
        tematId: p.tematId,
        tekst: 'Temat „' + temat.nazwa + '” sprawia Ci trudność (' + p.liczbaBledow + ' błędów). Zrób powtórkę błędów.',
        waga: 100 + p.liczbaBledow,
      });
    });

    dzialy.forEach(function (dzial) {
      var tematy = queries.wszystkieTematyDzialu(dzial.id).filter(function (t) { return !t.rodzic || queries.lekcjeTematu(t.id).length; });
      var slabe = progressRepo.slabeTematy(tematy.map(function (t) { return t.id; }), 60);
      slabe.slice(0, 3).forEach(function (s) {
        var temat = queries.temat(s.tematId);
        if (!temat) return;
        out.push({
          typ: 'slaby-temat',
          tematId: s.tematId,
          tekst: 'Temat „' + temat.nazwa + '” — skuteczność ' + s.skutecznosc + '%. Zalecana ponowna lekcja.',
          waga: 90 - s.skutecznosc,
        });
      });
    });

    return out.sort(function (a, b) { return b.waga - a.waga; }).slice(0, 6);
  }

  window.App.modules.recommendationEngine = {
    rekomendacjaDlaTematu: rekomendacjaDlaTematu,
    globalneRekomendacje: globalneRekomendacje,
  };
})();
