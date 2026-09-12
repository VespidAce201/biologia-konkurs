(function () {
  'use strict';
  var register = window.App.content.register;

  register.egzamin({
    id: 'egz-konkurs-01',
    typ: 'konkursowy',
    tytul: 'Symulacja I etapu (szkolnego) konkursu kuratoryjnego z biologii',
    opis:
      'Pełna symulacja arkusza konkursowego — 40 punktów, 60 minut. Pytania obejmują oba działy (Organizacja i chemizm życia oraz Różnorodność życia), różne poziomy trudności oraz różnorodne typy zadań: wybór odpowiedzi, prawda/fałsz, dopasowywanie, uzupełnianie luk, ustalanie kolejności, analizę schematów, tabel i wykresów. Rozwiąż arkusz w jednym podejściu, tak jak podczas prawdziwego konkursu.',
    limitCzasuMin: 60,
    maxPunkty: 40,
    pytaniaIds: [
      'p-t113-13', 'p-t204-nagonasienne-07', 'p-t205-11', 'p-t204-mchy-05', 'p-t204-okrytonasienne-15',
      'p-t105-12', 'p-t115-06', 'p-t206-pierscienice-13', 'p-t110-09', 'p-t206-nicienie-08',
      'p-t206-plazince-14', 'p-t202-16', 'p-t117-07', 'p-t112-09', 'p-t109-16',
      'p-t206-plazy-04', 'p-t104-04', 'p-t206-mieczaki-05', 'p-t206-ssaki-k2', 'p-t206-tkanki-k2',
      'p-t107-14', 'p-t114-06', 'p-t101-k1',
    ],
  });
})();
