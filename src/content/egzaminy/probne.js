(function () {
  'use strict';
  var register = window.App.content.register;

  register.egzamin({
    id: 'egz-probny-podstawowy',
    typ: 'probny',
    tytul: 'Egzamin próbny — poziom podstawowy',
    opis: 'Zestaw skupiony na pytaniach łatwych i średnich z obu działów — dobry start przed trudniejszymi egzaminami próbnymi.',
    limitCzasuMin: 35,
    maxPunkty: 28,
    pytaniaIds: [
      'p-t206-pierscienice-12', 'p-t206-stawonogi-04', 'p-t104-06', 'p-t113-08', 'p-t117-12',
      'p-t203-04', 'p-t206-ssaki-08', 'p-t112-07', 'p-t107-13', 'p-t204-nagonasienne-01',
      'p-t110-05', 'p-t114-01', 'p-t206-nicienie-09', 'p-t204-paprociowe-06', 'p-t204-tkanki-01',
      'p-t206-tkanki-k2', 'p-t108-15', 'p-t103-01', 'p-t101-k1',
    ],
  });

  register.egzamin({
    id: 'egz-probny-pelny-zakres',
    typ: 'probny',
    tytul: 'Egzamin próbny — pełny zakres',
    opis: 'Zestaw obejmujący wszystkie poziomy trudności i szeroki przekrój tematów z obu działów — najlepszy sprawdzian ogólnej gotowości.',
    limitCzasuMin: 45,
    maxPunkty: 35,
    pytaniaIds: [
      'p-t201-04', 'p-t117-12', 'p-t204-paprociowe-05', 'p-t108-07', 'p-t206-nicienie-08',
      'p-t116-04', 'p-t107-09', 'p-t106-12', 'p-t114-09', 'p-t206-mieczaki-14',
      'p-t105-08', 'p-t113-08', 'p-t104-13', 'p-t206-plazince-08', 'p-t206-stawonogi-05',
      'p-t202-02', 'p-t109-15', 'p-t204-mchy-02', 'p-t115-k2', 'p-t112-01', 'p-t101-k1',
    ],
  });

  register.egzamin({
    id: 'egz-probny-trudny',
    typ: 'probny',
    tytul: 'Egzamin próbny — poziom trudny i konkursowy',
    opis: 'Wymagający zestaw złożony głównie z pytań trudnych i konkursowych — sprawdź się przed właściwą symulacją konkursu.',
    limitCzasuMin: 45,
    maxPunkty: 35,
    pytaniaIds: [
      'p-t206-gady-14', 'p-t103-16', 'p-t204-nagonasienne-10', 'p-t201-15', 'p-t110-09',
      'p-t206-stawonogi-14', 'p-t206-tkanki-06', 'p-t203-05', 'p-t206-ssaki-12', 'p-t206-ptaki-06',
      'p-t206-nicienie-10', 'p-t116-08', 'p-t202-09', 'p-t115-06', 'p-t117-10',
      'p-t206-pierscienice-09', 'p-t101-k1',
    ],
  });

  register.egzamin({
    id: 'egz-probny-dzial-1',
    typ: 'probny',
    tytul: 'Sprawdzian — Dział I: Organizacja i chemizm życia',
    opis: 'Zestaw skupiony wyłącznie na Dziale I — dobry sposób na przećwiczenie chemizmu i budowy komórki przed pełnym egzaminem.',
    limitCzasuMin: 25,
    maxPunkty: 24,
    pytaniaIds: [
      'p-t115-15', 'p-t114-09', 'p-t101-04', 'p-t108-10', 'p-t107-15',
      'p-t111-04', 'p-t106-09', 'p-t110-09', 'p-t105-04', 'p-t117-05',
      'p-t104-02', 'p-t102-01', 'p-t109-15', 'p-t113-02', 'p-t112-05',
    ],
  });

  register.egzamin({
    id: 'egz-probny-dzial-2',
    typ: 'probny',
    tytul: 'Sprawdzian — Dział II: Różnorodność życia',
    opis: 'Zestaw skupiony wyłącznie na Dziale II — klasyfikacja, wirusy, bakterie, rośliny, grzyby oraz zwierzęta.',
    limitCzasuMin: 25,
    maxPunkty: 24,
    pytaniaIds: [
      'p-t206-pierscienice-13', 'p-t206-gady-07', 'p-t202-09', 'p-t201-04', 'p-t206-mieczaki-12',
      'p-t204-okrytonasienne-07', 'p-t204-paprociowe-15', 'p-t204-mchy-08', 'p-t206-stawonogi-04', 'p-t206-ssaki-k1',
      'p-t206-nicienie-02', 'p-t204-nagonasienne-06', 'p-t206-plazince-09', 'p-t205-09', 'p-t204-tkanki-06',
    ],
  });
})();
