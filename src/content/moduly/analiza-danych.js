(function () {
  'use strict';
  var register = window.App.content.register;

  register.analizaDanych({
    id: 'ad-tetno-wysilek',
    typ: 'wykres',
    tytul: 'Tętno w zależności od wysiłku fizycznego',
    kontekst: 'Zmierzono tętno (liczbę uderzeń serca na minutę) u ucznia w spoczynku oraz podczas różnych rodzajów wysiłku.',
    wykres: {
      typ: 'slupkowy',
      tytul: 'Tętno [uderzenia/min]',
      jednostka: 'ud/min',
      dane: [
        { etykieta: 'Spoczynek', wartosc: 72 },
        { etykieta: 'Marsz', wartosc: 95 },
        { etykieta: 'Bieg trucht.', wartosc: 130 },
        { etykieta: 'Sprint', wartosc: 175 },
      ],
    },
    pytania: [
      {
        tresc: 'O ile uderzeń na minutę wzrosło tętno między spoczynkiem a sprintem?',
        opcje: ['53', '103', '175', '72'],
        poprawna: 1,
        wyjasnienie: '175 − 72 = 103 uderzenia na minutę.',
        punkty: 1,
      },
      {
        tresc: 'Jaki wniosek można wyciągnąć na podstawie wykresu?',
        opcje: [
          'Tętno maleje wraz ze wzrostem intensywności wysiłku.',
          'Im większa intensywność wysiłku fizycznego, tym wyższe tętno.',
          'Tętno nie zależy od wysiłku fizycznego.',
          'Tętno jest najwyższe w spoczynku.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wykres pokazuje wyraźną tendencję wzrostową — wraz ze wzrostem intensywności wysiłku rośnie tętno, ponieważ mięśnie potrzebują więcej tlenu i składników odżywczych.',
        punkty: 1,
      },
    ],
  });

  register.analizaDanych({
    id: 'ad-tabela-oddychanie',
    typ: 'tabela',
    tytul: 'Zużycie tlenu przez różne organizmy',
    kontekst: 'W tabeli przedstawiono przybliżone zużycie tlenu (w mililitrach na godzinę na gram masy ciała) przez różne organizmy w spoczynku.',
    tabela: {
      tytul: 'Zużycie tlenu [ml O2 / g / h]',
      kolumny: ['Organizm', 'Zużycie tlenu', 'Masa ciała'],
      wiersze: [
        ['Mysz', '2,5', 'mała'],
        ['Człowiek', '0,2', 'średnia'],
        ['Słoń', '0,05', 'duża'],
      ],
    },
    pytania: [
      {
        tresc: 'Na podstawie tabeli określ zależność między masą ciała a zużyciem tlenu na gram masy.',
        opcje: [
          'Im większa masa ciała, tym większe zużycie tlenu na gram masy.',
          'Im mniejsza masa ciała, tym większe zużycie tlenu na gram masy.',
          'Zużycie tlenu nie zależy od masy ciała.',
          'Wszystkie organizmy zużywają tyle samo tlenu na gram masy.',
        ],
        poprawna: 1,
        wyjasnienie: 'Mniejsze organizmy (np. mysz) mają większy stosunek powierzchni ciała do jego objętości, przez co szybciej tracą ciepło i muszą utrzymywać intensywniejszy metabolizm — dlatego zużywają relatywnie więcej tlenu na gram masy ciała niż duże organizmy.',
        punkty: 2,
      },
    ],
  });
})();
