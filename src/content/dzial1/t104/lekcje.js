(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t104-01',
    tematId: 't104',
    kolejnosc: 1,
    tytul: 'Węglowodany (cukry)',
    wprowadzenie:
      'Węglowodany (cukry, sacharydy) to związki organiczne zbudowane z węgla, wodoru i tlenu, będące dla większości organizmów podstawowym i najszybciej dostępnym źródłem energii. Pełnią też ważną funkcję budulcową i zapasową — a to, którą z tych funkcji pełni dany węglowodan, zależy od sposobu połączenia jego cząsteczek.',
    sekcje: [
      {
        naglowek: 'Podział węglowodanów',
        diagramId: 'd-t104-podzial-cukrow',
        akapity: [
          'Monosacharydy (cukry proste) to najprostsze węglowodany, które nie ulegają dalszej hydrolizie na mniejsze cukry. Najważniejszym monosacharydem jest glukoza — podstawowe "paliwo" komórek, wykorzystywane w procesie oddychania komórkowego. Inne przykłady to fruktoza (cukier owocowy) i galaktoza.',
          'Disacharydy (dwucukry) powstają w reakcji kondensacji z połączenia dwóch cząsteczek monosacharydów wiązaniem glikozydowym, z uwolnieniem cząsteczki wody. Przykłady: sacharoza (cukier spożywczy, glukoza + fruktoza), laktoza (cukier mleczny, glukoza + galaktoza) i maltoza (glukoza + glukoza).',
          'Polisacharydy (wielocukry) to długie łańcuchy zbudowane z wielu (nawet tysięcy) połączonych ze sobą cząsteczek monosacharydów. W przeciwieństwie do cukrów prostych i dwucukrów zwykle nie mają słodkiego smaku i są nierozpuszczalne lub słabo rozpuszczalne w wodzie. Przykłady: skrobia, glikogen, celuloza, chityna.',
        ],
      },
      {
        naglowek: 'Skrobia i celuloza — ten sam budulec, różne funkcje',
        diagramId: 'd-t104-skrobia-celuloza',
        akapity: [
          'Skrobia i celuloza są zbudowane z tych samych cząsteczek glukozy, jednak łączą się one ze sobą innym rodzajem wiązania glikozydowego. Ta pozornie niewielka różnica w budowie ma ogromne znaczenie dla właściwości obu związków.',
          'Skrobia pełni u roślin funkcję zapasową — magazynowana jest w bulwach, nasionach i kłączach jako rezerwa energii. Enzymy trawienne człowieka (np. amylaza) potrafią rozkładać wiązania glikozydowe skrobi, dzięki czemu jest ona dla nas źródłem energii.',
          'Celuloza pełni funkcję budulcową — buduje ściany komórkowe roślin, nadając im sztywność i wytrzymałość. Człowiek nie wytwarza enzymów zdolnych do rozkładu wiązań glikozydowych celulozy, dlatego przechodzi ona przez układ pokarmowy nienaruszona — jako tzw. błonnik pokarmowy, który mimo braku wartości energetycznej pobudza pracę jelit.',
          'U zwierząt odpowiednikiem zapasowym skrobi jest glikogen — również zbudowany z glukozy, magazynowany głównie w wątrobie i mięśniach. Chityna z kolei buduje pancerzyki stawonogów oraz ściany komórkowe grzybów.',
        ],
      },
      {
        naglowek: 'Funkcje węglowodanów w organizmie',
        akapity: [
          'Funkcja energetyczna jest najważniejszą rolą węglowodanów — glukoza jest głównym substratem oddychania komórkowego, w którym uwalniana jest energia potrzebna do wszystkich procesów życiowych.',
          'Funkcja zapasowa polega na magazynowaniu nadmiaru energii w postaci polisacharydów — skrobi u roślin i glikogenu u zwierząt, które w razie potrzeby mogą zostać ponownie rozłożone do glukozy.',
          'Funkcja budulcowa realizowana jest przez celulozę (ściany komórkowe roślin) i chitynę (pancerzyki stawonogów, ściany komórkowe grzybów) — polisacharydy te tworzą trwałe struktury, a nie służą jako źródło energii dla organizmu, który je wytwarza.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Monosacharyd', definicja: 'Najprostszy węglowodan (cukier prosty), który nie ulega dalszej hydrolizie, np. glukoza, fruktoza, galaktoza.' },
      { termin: 'Disacharyd', definicja: 'Węglowodan powstały z połączenia dwóch cząsteczek monosacharydów wiązaniem glikozydowym, np. sacharoza, laktoza, maltoza.' },
      { termin: 'Polisacharyd', definicja: 'Węglowodan zbudowany z wielu połączonych ze sobą cząsteczek monosacharydów, np. skrobia, glikogen, celuloza.' },
      { termin: 'Wiązanie glikozydowe', definicja: 'Wiązanie chemiczne łączące ze sobą cząsteczki cukrów prostych w dwucukrach i wielocukrach.' },
      { termin: 'Glukoza', definicja: 'Najważniejszy monosacharyd, podstawowy substrat oddychania komórkowego, "paliwo" komórek.' },
      { termin: 'Skrobia', definicja: 'Polisacharyd zapasowy roślin, zbudowany z cząsteczek glukozy, magazynowany np. w bulwach i nasionach.' },
      { termin: 'Glikogen', definicja: 'Polisacharyd zapasowy zwierząt, zbudowany z cząsteczek glukozy, magazynowany głównie w wątrobie i mięśniach.' },
      { termin: 'Celuloza', definicja: 'Polisacharyd budulcowy roślin, zbudowany z cząsteczek glukozy połączonych innym wiązaniem niż w skrobi; nietrawiony przez człowieka.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Skrobia',
        b: 'Celuloza',
        roznica: 'Obie są polisacharydami zbudowanymi z glukozy, ale mają inny rodzaj wiązania glikozydowego. Skrobia pełni funkcję zapasową i jest trawiona przez człowieka, a celuloza pełni funkcję budulcową (ściana komórkowa roślin) i nie jest trawiona przez człowieka.',
      },
      {
        a: 'Skrobia',
        b: 'Glikogen',
        roznica: 'Oba są zapasowymi polisacharydami zbudowanymi z glukozy, ale skrobia magazynowana jest przez rośliny (np. w bulwach, nasionach), a glikogen przez zwierzęta (głównie w wątrobie i mięśniach).',
      },
    ],
    uwazajNa: [
      'Nie każdy węglowodan jest słodki — skrobia i celuloza to węglowodany (polisacharydy), ale nie mają słodkiego smaku, w przeciwieństwie do monosacharydów i disacharydów.',
      'Skrobia i glikogen to dwa różne związki chemiczne (różnią się stopniem rozgałęzienia łańcucha), a nie ta sama substancja nazywana inaczej u roślin i zwierząt.',
    ],
    musiszWiedziec: [
      'Skrobia, glikogen i celuloza są zbudowane z tych samych cząsteczek glukozy — to różnice w rodzaju wiązania glikozydowego między cząsteczkami decydują o zupełnie odmiennych funkcjach (zapasowej lub budulcowej) i strawności tych polisacharydów.',
    ],
    diagramy: ['d-t104-podzial-cukrow', 'd-t104-skrobia-celuloza'],
    pytaniaKontrolne: ['p-t104-01', 'p-t104-05'],
  });
})();
