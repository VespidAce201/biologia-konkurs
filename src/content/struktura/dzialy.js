(function () {
  'use strict';
  var register = window.App.content.register;

  register.dzial({
    id: 'd1',
    kod: 'I',
    nazwa: 'Organizacja i chemizm życia',
    opis: 'Budowa chemiczna organizmów, budowa i funkcjonowanie komórki, tkanki, podstawowe procesy życiowe.',
    kolor: 'var(--dzial-1)',
    ikona: 'dna',
    kolejnosc: 1,
  });

  register.dzial({
    id: 'd2',
    kod: 'II',
    nazwa: 'Różnorodność życia',
    opis: 'Klasyfikacja organizmów, wirusy, bakterie, rośliny, grzyby oraz świat zwierząt — bezkręgowców i kręgowców.',
    kolor: 'var(--dzial-2-klasyfikacja)',
    ikona: 'tree',
    kolejnosc: 2,
  });
})();
