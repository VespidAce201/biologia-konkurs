(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t204-mchy-01',
    tematId: 't204-mchy',
    kolejnosc: 1,
    tytul: 'Mchy',
    wprowadzenie:
      'Mchy to najprostsze rośliny lądowe. Należą do roślin zarodnikowych (rozmnażają się za pomocą zarodników, a nie nasion) i są roślinami beznaczyniowymi — nie mają prawdziwych tkanek przewodzących. To właśnie ta cecha decyduje o ich niewielkich rozmiarach i silnym uzależnieniu od wilgotnego środowiska.',
    sekcje: [
      {
        naglowek: 'Budowa mchu',
        akapity: [
          'Mchy nie mają prawdziwych tkanek przewodzących (brak ksylemu i floemu), dlatego osiągają niewielkie rozmiary — zwykle kilka centymetrów wysokości.',
          'Widoczna, zielona postać mchu zbudowana jest z drobnej "łodyżki" z małymi "listkami". Nie są to prawdziwe łodyga i liście, ponieważ brakuje w nich tkanek przewodzących i wzmacniających typowych dla tych organów u roślin naczyniowych.',
          'Zamiast korzeni mchy wytwarzają chwytniki (ryzoidy) — cienkie, nitkowate wyrostki, które jedynie przytwierdzają roślinę do podłoża i nie pobierają skutecznie wody z głębszych warstw gleby. Woda i sole mineralne wnikają do wnętrza rośliny niemal całą jej powierzchnią.',
        ],
      },
      {
        naglowek: 'Środowisko życia i znaczenie',
        akapity: [
          'Mchy rosną w miejscach wilgotnych i zacienionych — w lasach, na bagnach, skałach, korze drzew. Ich rozwój i rozmnażanie płciowe są ściśle uzależnione od dostępności wody w otoczeniu.',
          'Torfowce (rodzaj Sphagnum) tworzą rozległe torfowiska; obumierając i gromadząc się warstwami w warunkach niedoboru tlenu, z czasem przekształcają się w torf. Mchy są też uznawane za bioindykatory — wskazują na wilgotność i czystość środowiska, w którym rosną.',
        ],
      },
      {
        naglowek: 'Cykl rozwojowy (przemiana pokoleń)',
        diagramId: 'd-t204-mchy-cykl',
        akapity: [
          'U mchów, tak jak u wszystkich roślin, w cyklu rozwojowym po sobie następują dwa pokolenia: płciowe (gametofit) i bezpłciowe (sporofit). Zjawisko to nazywamy przemianą pokoleń. U mchów dominującym, widocznym gołym okiem pokoleniem jest gametofit.',
          'Dojrzały gametofit wytwarza organy płciowe: plemnie (męskie, produkujące ruchliwe plemniki z wiciami) i rodnie (żeńskie, produkujące komórki jajowe). Do zapłodnienia niezbędna jest woda — plemniki muszą w niej dopłynąć do rodni.',
          'Z zapłodnionej komórki jajowej (zygoty) rozwija się sporofit — zarodnia osadzona na nóżce, związana z gametofitem. Wewnątrz zarodni w wyniku mejozy powstają haploidalne zarodniki.',
          'Uwolnione zarodniki kiełkują na wilgotnym podłożu, tworząc nitkowatą strukturę zwaną protonemą, z której wyrasta nowy gametofit — i cykl zaczyna się od nowa.',
        ],
      },
      {
        naglowek: 'Cechy przystosowawcze',
        akapity: [
          'Brak prawdziwych tkanek przewodzących ogranicza wysokość mchów i sprawia, że mogą żyć wyłącznie w warunkach stałej wilgotności — bez wody szybko więdną, choć wiele gatunków potrafi później się uwodnić i wrócić do życia.',
          'Zależność rozmnażania płciowego od obecności wody (potrzebnej do przemieszczania się plemników) to cecha łącząca mchy z innymi roślinami zarodnikowymi, np. paprociami.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Gametofit', definicja: 'Haploidalne pokolenie płciowe rośliny, wytwarzające gamety (u mchów jest to dominująca, widoczna postać mchu).' },
      { termin: 'Sporofit', definicja: 'Pokolenie bezpłciowe rośliny, produkujące zarodniki w wyniku mejozy (u mchów zarodnia na nóżce osadzona na gametofitcie).' },
      { termin: 'Zarodnia (sporangium)', definicja: 'Struktura, w której w wyniku mejozy powstają zarodniki.' },
      { termin: 'Chwytniki (ryzoidy)', definicja: 'Nitkowate wyrostki mchów, przytwierdzające roślinę do podłoża; nie pełnią funkcji korzeni w pobieraniu wody.' },
      { termin: 'Protonema', definicja: 'Nitkowata struktura powstająca z kiełkującego zarodnika mchu, z której wyrasta nowy gametofit.' },
      { termin: 'Plemnia', definicja: 'Męski organ płciowy gametofitu, produkujący ruchliwe plemniki.' },
      { termin: 'Rodnia', definicja: 'Żeński organ płciowy gametofitu, produkujący komórkę jajową.' },
      { termin: 'Przemiana pokoleń', definicja: 'Naprzemienne następowanie po sobie w cyklu rozwojowym pokolenia płciowego (gametofitu) i bezpłciowego (sporofitu).' },
      { termin: 'Torfowiec (Sphagnum)', definicja: 'Rodzaj mchu tworzący torfowiska; obumierając warstwami w warunkach niedoboru tlenu, przyczynia się do powstawania torfu.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Mchy',
        b: 'Paprocie',
        roznica: 'Mchy nie mają prawdziwych tkanek przewodzących ani korzeni (tylko chwytniki), a dominującym pokoleniem jest gametofit. Paprocie mają tkanki przewodzące i korzenie przybyszowe, a dominującym pokoleniem jest sporofit.',
      },
    ],
    musiszWiedziec: [
      'Mchy nie mają prawdziwych korzeni, łodyg ani liści — struktury te nazywa się "chwytnikami", "łodyżką" i "listkami", ponieważ brak tkanek przewodzących uniemożliwia utworzenie prawdziwych organów.',
      'Rozmnażanie płciowe mchów wymaga obecności wody, w której poruszają się plemniki.',
    ],
    diagramy: ['d-t204-mchy-cykl'],
    pytaniaKontrolne: ['p-t204-mchy-01', 'p-t204-mchy-10'],
  });
})();
