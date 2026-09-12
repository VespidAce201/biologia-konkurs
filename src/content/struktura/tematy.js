(function () {
  'use strict';
  var register = window.App.content.register;

  // ===== DZIAŁ I: Organizacja i chemizm życia =====
  var d1 = [
    ['t101', 'Poziomy organizacji życia'],
    ['t102', 'Związki nieorganiczne: woda i sole mineralne'],
    ['t103', 'Białka'],
    ['t104', 'Węglowodany (cukry)'],
    ['t105', 'Tłuszcze (lipidy)'],
    ['t106', 'Kwasy nukleinowe'],
    ['t107', 'Budowa komórki: prokariotyczna i eukariotyczna'],
    ['t108', 'Organelle komórkowe i ich funkcje'],
    ['t109', 'Błona komórkowa i transport przez błony'],
    ['t110', 'Tkanki — wprowadzenie'],
    ['t111', 'Metabolizm i enzymy'],
    ['t112', 'Odżywianie się organizmów'],
    ['t113', 'Fotosynteza'],
    ['t114', 'Oddychanie komórkowe'],
    ['t115', 'Rozmnażanie się organizmów'],
    ['t116', 'Wzrost i rozwój organizmów'],
    ['t117', 'Reagowanie na bodźce i homeostaza'],
  ];
  d1.forEach(function (row, idx) {
    register.temat({ id: row[0], dzialId: 'd1', nazwa: row[1], kolejnosc: idx + 1 });
  });

  // ===== DZIAŁ II: Różnorodność życia =====
  register.temat({ id: 't201', dzialId: 'd2', nazwa: 'Klasyfikacja organizmów', kolejnosc: 1 });
  register.temat({ id: 't202', dzialId: 'd2', nazwa: 'Wirusy — bezkomórkowe formy materii', kolejnosc: 2 });
  register.temat({ id: 't203', dzialId: 'd2', nazwa: 'Bakterie — organizmy jednokomórkowe', kolejnosc: 3 });

  register.temat({ id: 't204', dzialId: 'd2', nazwa: 'Różnorodność i jedność roślin', kolejnosc: 4 });
  var rosliny = [
    ['t204-tkanki', 'Tkanki roślinne'],
    ['t204-mchy', 'Mchy'],
    ['t204-paprociowe', 'Paprociowe'],
    ['t204-nagonasienne', 'Rośliny nagonasienne'],
    ['t204-okrytonasienne', 'Rośliny okrytonasienne'],
  ];
  rosliny.forEach(function (row, idx) {
    register.temat({ id: row[0], dzialId: 'd2', rodzic: 't204', nazwa: row[1], kolejnosc: idx + 1 });
  });

  register.temat({ id: 't205', dzialId: 'd2', nazwa: 'Grzyby — organizmy cudzożywne', kolejnosc: 5 });

  register.temat({ id: 't206', dzialId: 'd2', nazwa: 'Różnorodność i jedność świata zwierząt', kolejnosc: 6 });
  var zwierzeta = [
    ['t206-tkanki', 'Tkanki zwierzęce na przykładzie człowieka', 'Ogólne'],
    ['t206-plazince', 'Płazińce', 'Bezkręgowce'],
    ['t206-nicienie', 'Nicienie', 'Bezkręgowce'],
    ['t206-pierscienice', 'Pierścienice', 'Bezkręgowce'],
    ['t206-stawonogi', 'Stawonogi', 'Bezkręgowce'],
    ['t206-mieczaki', 'Mięczaki', 'Bezkręgowce'],
    ['t206-ryby', 'Ryby', 'Kręgowce'],
    ['t206-plazy', 'Płazy', 'Kręgowce'],
    ['t206-gady', 'Gady', 'Kręgowce'],
    ['t206-ptaki', 'Ptaki', 'Kręgowce'],
    ['t206-ssaki', 'Ssaki', 'Kręgowce'],
  ];
  zwierzeta.forEach(function (row, idx) {
    register.temat({ id: row[0], dzialId: 'd2', rodzic: 't206', nazwa: row[1], grupa: row[2], kolejnosc: idx + 1 });
  });
})();
