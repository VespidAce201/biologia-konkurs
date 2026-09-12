(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t115-01',
    tematId: 't115',
    kolejnosc: 1,
    tytul: 'Rozmnażanie się organizmów',
    wprowadzenie:
      'Rozmnażanie to zdolność organizmów do wydawania na świat potomstwa — jedna z podstawowych cech odróżniających istoty żywe od materii nieożywionej. Wyróżniamy dwa zasadnicze sposoby rozmnażania: bezpłciowe i płciowe, które różnią się liczbą organizmów rodzicielskich oraz zmiennością genetyczną potomstwa.',
    sekcje: [
      {
        naglowek: 'Dwa sposoby rozmnażania',
        diagramId: 'd-t115-rozmnazanie',
        akapity: [
          'W rozmnażaniu bezpłciowym bierze udział tylko jeden organizm rodzicielski. Potomek powstaje bez udziału gamet i zapłodnienia, dzięki czemu jest genetyczną kopią (klonem) rodzica — ma identyczny materiał genetyczny.',
          'W rozmnażaniu płciowym biorą udział dwa organizmy rodzicielskie (męski i żeński), które wytwarzają gamety. Połączenie gamety męskiej i żeńskiej w procesie zapłodnienia prowadzi do powstania zygoty, z której rozwija się nowy organizm o unikatowej, nowej kombinacji genów obojga rodziców.',
        ],
      },
      {
        naglowek: 'Rozmnażanie bezpłciowe — formy',
        akapity: [
          'Podział to najprostsza forma rozmnażania bezpłciowego, typowa dla organizmów jednokomórkowych (np. bakterii, ameby) — komórka macierzysta dzieli się na dwie identyczne komórki potomne.',
          'Pączkowanie polega na wytworzeniu na ciele organizmu macierzystego małego wyrostka (pąka), który rośnie i w końcu oddziela się jako samodzielny osobnik. Występuje np. u drożdży i u stułbi pospolitej (hydry).',
          'Fragmentacja (regeneracja) to zdolność odtworzenia całego organizmu z oderwanego fragmentu ciała — obserwuje się ją np. u rozgwiazd i płazińców.',
          'Rozmnażanie wegetatywne roślin wykorzystuje organy wegetatywne (niesłużące bezpośrednio do rozmnażania płciowego): rozłogi (truskawka), kłącza (perz), bulwy (ziemniak) oraz sadzonki pobierane z łodyg lub liści.',
        ],
      },
      {
        naglowek: 'Rozmnażanie płciowe',
        akapity: [
          'Gamety (komórki rozrodcze — plemniki i komórki jajowe) powstają w narządach rozrodczych organizmów rodzicielskich. Każda gameta niesie połowę materiału genetycznego danego rodzica.',
          'Połączenie gamety męskiej i żeńskiej nazywamy zapłodnieniem. W jego wyniku powstaje zygota — pierwsza komórka nowego organizmu, zawierająca materiał genetyczny obojga rodziców.',
          'Ponieważ każdy potomek otrzymuje nową, niepowtarzalną kombinację genów matki i ojca, rozmnażanie płciowe zwiększa zmienność genetyczną potomstwa. Dzięki temu populacja jest bardziej zróżnicowana i lepiej przystosowuje się do zmieniających się warunków środowiska.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Rozmnażanie', definicja: 'Zdolność organizmów do wydawania na świat potomstwa, zapewniająca ciągłość gatunku.' },
      { termin: 'Rozmnażanie bezpłciowe', definicja: 'Rozmnażanie z udziałem jednego organizmu rodzicielskiego, bez udziału gamet — potomek jest genetyczną kopią rodzica.' },
      { termin: 'Rozmnażanie płciowe', definicja: 'Rozmnażanie z udziałem dwóch organizmów rodzicielskich, polegające na połączeniu gamet i dające potomstwo zróżnicowane genetycznie.' },
      { termin: 'Gameta', definicja: 'Komórka rozrodcza (plemnik lub komórka jajowa) niosąca połowę materiału genetycznego organizmu rodzicielskiego.' },
      { termin: 'Zapłodnienie', definicja: 'Połączenie się gamety męskiej i żeńskiej, w wyniku którego powstaje zygota.' },
      { termin: 'Zygota', definicja: 'Pierwsza komórka nowego organizmu, powstała z połączenia gamety męskiej i żeńskiej.' },
      { termin: 'Pączkowanie', definicja: 'Forma rozmnażania bezpłciowego polegająca na wytworzeniu wyrostka (pąka), z którego rozwija się nowy, samodzielny organizm.' },
      { termin: 'Fragmentacja', definicja: 'Odtworzenie całego, samodzielnego organizmu z oderwanego fragmentu ciała.' },
      { termin: 'Rozmnażanie wegetatywne', definicja: 'Bezpłciowe rozmnażanie roślin za pomocą organów wegetatywnych, np. rozłogów, kłączy, bulw lub sadzonek.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Rozmnażanie bezpłciowe',
        b: 'Rozmnażanie płciowe',
        roznica:
          'Rozmnażanie bezpłciowe angażuje jeden organizm rodzicielski i daje potomstwo genetycznie identyczne z rodzicem (klon), bez udziału gamet. Rozmnażanie płciowe wymaga dwóch organizmów rodzicielskich i połączenia ich gamet w procesie zapłodnienia, co daje potomstwo o nowej, zróżnicowanej kombinacji genów.',
      },
    ],
    uwazajNa: [
      'Sadzonkowanie, rozmnażanie rozłogami, kłączami i bulwami to wciąż rozmnażanie bezpłciowe (wegetatywne) — nie mylić z zapylaniem i zapłodnieniem, które są etapami rozmnażania płciowego roślin.',
      'To, że organizm rozmnaża się bezpłciowo, nie oznacza, że nie ma materiału genetycznego — wręcz przeciwnie, przekazuje go w całości, dokładnie takiego samego, każdemu potomkowi.',
    ],
    musiszWiedziec: [
      'Kluczowa różnica między obydwoma typami rozmnażania to zmienność genetyczna potomstwa: rozmnażanie bezpłciowe daje klony (brak zmienności), a rozmnażanie płciowe — potomstwo zróżnicowane genetycznie dzięki połączeniu genów dwóch rodziców.',
    ],
    diagramy: ['d-t115-rozmnazanie'],
    pytaniaKontrolne: ['p-t115-k1', 'p-t115-k2'],
  });
})();
