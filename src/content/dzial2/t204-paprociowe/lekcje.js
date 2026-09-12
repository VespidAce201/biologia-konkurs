(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t204-paprociowe-01',
    tematId: 't204-paprociowe',
    kolejnosc: 1,
    tytul: 'Paprociowe',
    wprowadzenie:
      'Paprocie (paprotniki) są, podobnie jak mchy, roślinami zarodnikowymi — rozmnażają się za pomocą zarodników, a nie nasion. W przeciwieństwie do mchów mają jednak prawdziwe tkanki przewodzące (są roślinami naczyniowymi), dzięki czemu są zbudowane z prawdziwych organów — liści, łodygi i korzeni — i mogą osiągać znacznie większe rozmiary.',
    sekcje: [
      {
        naglowek: 'Budowa paproci',
        diagramId: 'd-t204-paprociowe-budowa',
        akapity: [
          'Paprocie mają prawdziwe tkanki przewodzące (ksylem i floem), dlatego są roślinami naczyniowymi — potrafią transportować wodę i substancje odżywcze na większe odległości niż mchy i osiągają większe rozmiary.',
          'Widoczna, nadziemna część paproci to zwykle duże, często pierzastodzielone liście, wyrastające z podziemnej lub płożącej się łodygi zwanej kłączem. Młode liście są charakterystycznie zwinięte w tzw. ślimacznicę i stopniowo się rozwijają, rozprostowując się od nasady ku szczytowi.',
          'Z kłącza wyrastają liczne korzenie przybyszowe, które — w odróżnieniu od chwytników mchów — skutecznie pobierają z gleby wodę i sole mineralne.',
        ],
      },
      {
        naglowek: 'Cykl rozwojowy paproci (przemiana pokoleń)',
        diagramId: 'd-t204-paprociowe-cykl',
        akapity: [
          'U paproci, tak jak u mchów, w cyklu rozwojowym zachodzi przemiana pokoleń, jednak dominującym i widocznym gołym okiem pokoleniem jest sporofit (dojrzała roślina z liśćmi), a nie gametofit.',
          'Na spodniej stronie liści paproci tworzą się charakterystyczne, brunatne skupienia zarodni zwane sorusami. Wewnątrz zarodni w wyniku mejozy powstają haploidalne zarodniki.',
          'Uwolnione zarodniki kiełkują na wilgotnym podłożu, tworząc małe, zielone, sercowate przedrośle — to gametofit paproci, wytwarzający plemnie (organy męskie) i rodnie (organy żeńskie).',
          'Do zapłodnienia niezbędna jest woda, w której plemniki muszą dopłynąć do rodni. Z zapłodnionej komórki jajowej rozwija się nowy sporofit — początkowo związany z przedroślem, a z czasem usamodzielniający się.',
        ],
      },
      {
        naglowek: 'Środowisko i znaczenie',
        akapity: [
          'Paprocie rosną głównie w miejscach wilgotnych i cienistych — w lasach, wąwozach, na terenach podmokłych — ponieważ ich rozmnażanie płciowe jest ściśle uzależnione od obecności wody.',
          'Dawno wymarłe, olbrzymie paprocie i inne rośliny zarodnikowe rosnące w lasach karbońskich, obumierając i gromadząc się warstwami w warunkach niedoboru tlenu, przyczyniły się z czasem do powstania pokładów węgla kamiennego.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Sporofit', definicja: 'Dominujące, widoczne gołym okiem pokolenie bezpłciowe paproci, wytwarzające zarodniki w sorusach na liściach.' },
      { termin: 'Gametofit (przedrośle)', definicja: 'Małe, zielone, sercowate pokolenie płciowe paproci, wytwarzające plemnie i rodnie.' },
      { termin: 'Sorus (kupka zarodni)', definicja: 'Skupienie zarodni widoczne jako brunatna plamka na spodniej stronie liścia paproci.' },
      { termin: 'Zarodnia', definicja: 'Struktura, w której w wyniku mejozy powstają haploidalne zarodniki.' },
      { termin: 'Kłącze', definicja: 'Podziemna lub płożąca się łodyga paproci, z której wyrastają liście i korzenie przybyszowe.' },
      { termin: 'Korzenie przybyszowe', definicja: 'Korzenie wyrastające z łodygi (kłącza), skutecznie pobierające wodę i sole mineralne z gleby.' },
      { termin: 'Ślimacznica', definicja: 'Charakterystycznie zwinięty młody liść paproci, rozwijający się stopniowo od nasady.' },
      { termin: 'Tkanki przewodzące', definicja: 'Ksylem i floem — tkanki umożliwiające transport wody i substancji odżywczych; obecne u paproci, nieobecne u mchów.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Paprocie',
        b: 'Mchy',
        roznica: 'Paprocie mają prawdziwe tkanki przewodzące, liście, łodygę (kłącze) i korzenie przybyszowe, a dominującym pokoleniem jest sporofit. Mchy nie mają tkanek przewodzących ani prawdziwych korzeni (tylko chwytniki), a dominującym pokoleniem jest gametofit.',
      },
    ],
    uwazajNa: [
      'Sorusy widoczne na spodniej stronie liści paproci to skupienia zarodni, a nie nasiona ani zarodki kwiatowe — paprocie są roślinami zarodnikowymi i nie wytwarzają nasion.',
    ],
    musiszWiedziec: [
      'Paprocie mają tkanki przewodzące oraz prawdziwe korzenie, liście i łodygę (kłącze), ale — podobnie jak mchy — rozmnażają się zarodnikami, a nie nasionami.',
      'Rozmnażanie płciowe paproci, tak jak u mchów, wymaga obecności wody, w której poruszają się plemniki.',
    ],
    diagramy: ['d-t204-paprociowe-budowa', 'd-t204-paprociowe-cykl'],
    pytaniaKontrolne: ['p-t204-paprociowe-01', 'p-t204-paprociowe-10'],
  });
})();
