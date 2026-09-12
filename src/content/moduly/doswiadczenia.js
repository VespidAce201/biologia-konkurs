(function () {
  'use strict';
  var register = window.App.content.register;

  register.doswiadczenie({
    id: 'dosw-fotosynteza-swiatlo',
    tytul: 'Czy natężenie światła wpływa na intensywność fotosyntezy?',
    opis:
      'Uczniowie umieścili gałązkę moczarki kanadyjskiej (rośliny wodnej) w naczyniu z wodą i obserwowali liczbę pęcherzyków gazu wydzielanych z rośliny w ciągu 5 minut. Doświadczenie powtórzono w trzech wariantach: w ciemności, w świetle słabym (lampa w odległości 50 cm) i w świetle silnym (lampa w odległości 10 cm).',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy moczarka kanadyjska rośnie szybciej w wodzie ciepłej czy zimnej?',
          'Czy natężenie światła wpływa na intensywność fotosyntezy u moczarki kanadyjskiej?',
          'Ile tlenu zużywa ryba w akwarium?',
          'Czy woda w akwarium powinna być wymieniana codziennie?',
        ],
        poprawna: 1,
        wyjasnienie: 'Problem badawczy musi dokładnie odpowiadać temu, co jest badane w doświadczeniu — tutaj: wpływ natężenia światła na intensywność fotosyntezy.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Im silniejsze światło, tym więcej pęcherzyków gazu wydziela roślina (intensywniejsza fotosynteza).',
          'Kolor liści moczarki zależy od temperatury wody.',
          'Ryby pływają szybciej w silnym świetle.',
          'Woda paruje szybciej w silnym świetle.',
        ],
        poprawna: 0,
        wyjasnienie: 'Hipoteza to przewidywane wyjaśnienie problemu badawczego — powinna dotyczyć zależności między natężeniem światła a intensywnością fotosyntezy (liczbą pęcherzyków gazu).',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna (czynnik celowo zmieniany przez badacza) w tym doświadczeniu?',
        opcje: ['Gatunek rośliny', 'Natężenie światła', 'Liczba pęcherzyków gazu', 'Temperatura powietrza w sali'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest natężenie światła — to właśnie ten czynnik celowo zmieniano między wariantami doświadczenia.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: ['Roślina w silnym świetle', 'Roślina w słabym świetle', 'Roślina w ciemności', 'Wszystkie trzy warianty jednocześnie'],
        poprawna: 2,
        wyjasnienie: 'Próba kontrolna to wariant referencyjny, wobec którego porównuje się wyniki — tutaj roślina w ciemności (bez badanego czynnika, czyli bez światła) pozwala ocenić, jaki efekt daje sam brak światła.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z postawioną hipotezą, w którym wariancie należy się spodziewać największej liczby pęcherzyków gazu?',
        opcje: ['W ciemności', 'W słabym świetle', 'W silnym świetle', 'We wszystkich wariantach tak samo'],
        poprawna: 2,
        wyjasnienie: 'Jeśli hipoteza jest prawdziwa (silniejsze światło = intensywniejsza fotosynteza), najwięcej pęcherzyków gazu powinno pojawić się przy najsilniejszym świetle.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w którym wariancie zaobserwowano najintensywniejszą fotosyntezę.',
        tabela: { tytul: 'Liczba pęcherzyków gazu w ciągu 5 minut', kolumny: ['Wariant', 'Liczba pęcherzyków'], wiersze: [['Ciemność', '0'], ['Słabe światło (50 cm)', '12'], ['Silne światło (10 cm)', '34']] },
        opcje: ['Ciemność', 'Słabe światło', 'Silne światło', 'We wszystkich tak samo'],
        poprawna: 2,
        wyjasnienie: 'Najwięcej pęcherzyków gazu (34) zaobserwowano przy silnym świetle — to wskazuje na najintensywniejszą fotosyntezę w tym wariancie.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Natężenie światła nie wpływa na fotosyntezę.',
          'Wraz ze wzrostem natężenia światła rośnie intensywność fotosyntezy u moczarki kanadyjskiej.',
          'Fotosynteza zachodzi tylko w ciemności.',
          'Liczba pęcherzyków gazu nie zależy od żadnych czynników.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: im silniejsze światło, tym więcej pęcherzyków gazu (tlenu), czyli intensywniejsza fotosynteza.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega zaplanował podobne doświadczenie, ale w każdym wariancie użył innego gatunku rośliny wodnej. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — to poprawny plan',
          'Zmienił jednocześnie dwa czynniki (gatunek rośliny i natężenie światła), co uniemożliwia jednoznaczne wyciągnięcie wniosków',
          'Powinien użyć więcej światła',
          'Powinien wykonać doświadczenie w nocy',
        ],
        poprawna: 1,
        wyjasnienie: 'W poprawnie zaplanowanym doświadczeniu poza badaną zmienną niezależną (tu: natężenie światła) wszystkie inne warunki powinny być takie same. Zmiana gatunku rośliny wprowadza dodatkową, niekontrolowaną zmienną i unieważnia wyniki.',
      },
    ],
  });
})();
