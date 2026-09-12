(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t101-01',
    tematId: 't101',
    kolejnosc: 1,
    tytul: 'Poziomy organizacji życia',
    wprowadzenie:
      'Każdy żywy organizm — od bakterii po człowieka — zbudowany jest według tej samej ogólnej zasady: z prostych elementów powstają coraz bardziej złożone struktury. Ten porządek nazywamy poziomami organizacji życia.',
    sekcje: [
      {
        naglowek: 'Od komórki do organizmu',
        diagramId: 'd-poziomy-organizacji',
        akapity: [
          'Podstawową jednostką budującą i czynnościową wszystkich organizmów żywych jest komórka. To najmniejsza struktura, która samodzielnie wykazuje wszystkie cechy życia: pobiera i przetwarza substancje, oddycha, rośnie, reaguje na bodźce i się rozmnaża.',
          'U organizmów wielokomórkowych komórki o podobnej budowie i pełniące tę samą funkcję łączą się w tkanki (np. tkanka mięśniowa, tkanka nabłonkowa).',
          'Różne tkanki współpracujące ze sobą tworzą narząd (np. żołądek, serce, liść), który pełni określoną funkcję w organizmie.',
          'Narządy powiązane ze sobą czynnościowo tworzą układ narządów (np. układ pokarmowy, układ krwionośny), odpowiedzialny za konkretny proces życiowy.',
          'Wszystkie układy działające razem tworzą organizm — samodzielną, zdolną do życia całość.',
        ],
      },
      {
        naglowek: 'Organizmy jednokomórkowe i wielokomórkowe',
        akapity: [
          'Nie każdy organizm przechodzi przez wszystkie poziomy organizacji. Organizmy jednokomórkowe (np. bakterie, wiele protistów) składają się z pojedynczej komórki, która samodzielnie pełni wszystkie funkcje życiowe — nie mają tkanek ani narządów.',
          'Organizmy wielokomórkowe (rośliny, grzyby, zwierzęta) zbudowane są z wielu komórek, które dzielą się pracą — różne grupy komórek specjalizują się w różnych zadaniach. To zjawisko nazywamy zróżnicowaniem (specjalizacją) komórek.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Komórka', definicja: 'Najmniejsza strukturalna i funkcjonalna jednostka budująca organizmy żywe.' },
      { termin: 'Tkanka', definicja: 'Zespół komórek o podobnej budowie, pochodzeniu i wspólnej funkcji.' },
      { termin: 'Narząd', definicja: 'Struktura zbudowana z różnych tkanek, pełniąca określoną funkcję w organizmie.' },
      { termin: 'Układ narządów', definicja: 'Zespół narządów współpracujących w realizacji jednego procesu życiowego.' },
      { termin: 'Organizm', definicja: 'Samodzielna, zdolna do życia całość zbudowana z układów narządów (lub — u organizmów prostszych — z jednej komórki).' },
    ],
    zapamietajRoznice: [
      {
        a: 'Organizm jednokomórkowy',
        b: 'Organizm wielokomórkowy',
        roznica: 'Organizm jednokomórkowy to pojedyncza komórka pełniąca wszystkie funkcje życiowe samodzielnie (np. bakteria). Organizm wielokomórkowy składa się z wielu wyspecjalizowanych komórek tworzących tkanki, narządy i układy (np. człowiek, drzewo).',
      },
    ],
    uwazajNa: [
      'Nie każdy organizm ma tkanki — np. bakterie i wiele organizmów jednokomórkowych ich nie posiadają, mimo że są w pełni żywe.',
      'Kolejność poziomów organizacji jest zawsze taka sama: komórka → tkanka → narząd → układ narządów → organizm. Nie można jej odwrócić ani pominąć poziomu w pytaniach o hierarchię.',
    ],
    musiszWiedziec: [
      'Każdy wyższy poziom organizacji powstaje ze współdziałania elementów poziomu niższego — to podstawowa zasada budowy organizmów żywych.',
    ],
    diagramy: ['d-poziomy-organizacji'],
    pytaniaKontrolne: ['p-t101-k1', 'p-t101-k2'],
  });
})();
