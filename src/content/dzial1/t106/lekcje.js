(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t106-01',
    tematId: 't106',
    kolejnosc: 1,
    tytul: 'Kwasy nukleinowe: DNA i RNA',
    wprowadzenie:
      'Kwasy nukleinowe — DNA i RNA — to związki organiczne pełniące w komórce rolę nośnika i przekaźnika informacji genetycznej, czyli swoistej "instrukcji" decydującej o budowie i funkcjonowaniu każdego organizmu żywego.',
    sekcje: [
      {
        naglowek: 'Budowa nukleotydu — podstawowej jednostki kwasów nukleinowych',
        akapity: [
          'Podstawową jednostką budującą kwasy nukleinowe jest nukleotyd, złożony z trzech elementów: cukru pięciowęglowego (pentozy), reszty fosforanowej oraz zasady azotowej.',
          'Nukleotydy łączą się ze sobą, tworząc długi łańcuch — powstaje szkielet cukrowo-fosforanowy, do którego przyczepione są kolejne zasady azotowe.',
          'W DNA (kwasie dezoksyrybonukleinowym) cukrem jest deoksyryboza, a występujące zasady azotowe to: adenina (A), tymina (T), guanina (G) i cytozyna (C). W RNA (kwasie rybonukleinowym) cukrem jest ryboza, a zamiast tyminy występuje uracyl (U) — pozostałe trzy zasady (A, G, C) są takie same jak w DNA.',
        ],
      },
      {
        naglowek: 'Budowa przestrzenna DNA — podwójna helisa',
        diagramId: 'd-t106-podwojna-helisa',
        akapity: [
          'Cząsteczka DNA zbudowana jest z dwóch nici (łańcuchów nukleotydów) skręconych wokół wspólnej osi w kształt podwójnej helisy — jej budowę przestrzenną opisali w 1953 roku James Watson i Francis Crick.',
          'Obie nici DNA połączone są ze sobą wiązaniami wodorowymi między zasadami azotowymi, zgodnie z zasadą komplementarności: adenina zawsze łączy się z tyminą (A-T), a guanina zawsze z cytozyną (G-C).',
          'Dzięki zasadzie komplementarności, znając sekwencję zasad na jednej nici, można dokładnie odtworzyć sekwencję drugiej nici — to fundament wiernego kopiowania (replikacji) materiału genetycznego przed każdym podziałem komórki.',
          'RNA zwykle występuje w postaci pojedynczej nici (nie tworzy podwójnej helisy) i pełni różne role pomocnicze w odczycie informacji genetycznej oraz syntezie białek — np. mRNA przenosi informację z DNA do miejsca, w którym powstają białka.',
        ],
      },
      {
        naglowek: 'Rola kwasów nukleinowych w komórce',
        diagramId: 'd-t106-dna-rna-porownanie',
        akapity: [
          'DNA jest głównym, trwałym nośnikiem informacji genetycznej — zawiera zapisany w sekwencji nukleotydów "przepis" na budowę wszystkich białek organizmu, a tym samym decyduje o jego cechach dziedzicznych. U organizmów eukariotycznych DNA znajduje się głównie w jądrze komórkowym, gdzie tworzy chromosomy, a jego niewielkie ilości występują też w mitochondriach i chloroplastach.',
          'RNA powstaje na podstawie zapisu DNA i uczestniczy w odczytywaniu tej informacji oraz w syntezie białek — pełni funkcję "pośrednika" i "wykonawcy" instrukcji zapisanych w DNA.',
          'Informacja genetyczna zapisana w DNA jest przekazywana z pokolenia na pokolenie podczas podziałów komórkowych i rozmnażania — dzięki temu cechy dziedziczne są przekazywane potomstwu.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Kwas nukleinowy', definicja: 'Związek organiczny (DNA lub RNA) zbudowany z nukleotydów, pełniący rolę nośnika lub przekaźnika informacji genetycznej.' },
      { termin: 'Nukleotyd', definicja: 'Podstawowa jednostka budująca kwasy nukleinowe, złożona z cukru pięciowęglowego, reszty fosforanowej i zasady azotowej.' },
      { termin: 'Zasada azotowa', definicja: 'Składnik nukleotydu; w DNA to adenina, tymina, guanina i cytozyna, w RNA — adenina, uracyl, guanina i cytozyna.' },
      { termin: 'DNA (kwas dezoksyrybonukleinowy)', definicja: 'Kwas nukleinowy zbudowany z dwóch nici tworzących podwójną helisę, zawierający cukier deoksyrybozę; główny nośnik informacji genetycznej.' },
      { termin: 'RNA (kwas rybonukleinowy)', definicja: 'Kwas nukleinowy zwykle jednoniciowy, zawierający cukier rybozę; uczestniczy w odczycie informacji genetycznej i syntezie białek.' },
      { termin: 'Podwójna helisa', definicja: 'Przestrzenna struktura cząsteczki DNA — dwie nici nukleotydów skręcone wokół wspólnej osi.' },
      { termin: 'Zasada komplementarności', definicja: 'Reguła, według której adenina zawsze łączy się z tyminą (A-T), a guanina z cytozyną (G-C) w podwójnej nici DNA.' },
      { termin: 'Gen', definicja: 'Fragment cząsteczki DNA zawierający informację o budowie jednego białka (lub cząsteczki RNA).' },
    ],
    zapamietajRoznice: [
      {
        a: 'DNA',
        b: 'RNA',
        roznica: 'DNA zbudowany jest z dwóch nici tworzących podwójną helisę, zawiera cukier deoksyrybozę i zasadę tyminę; jest głównym, stabilnym nośnikiem informacji genetycznej przechowywanym głównie w jądrze komórkowym. RNA zwykle występuje w postaci pojedynczej nici, zawiera cukier rybozę i zamiast tyminy — uracyl; powstaje na podstawie DNA i pełni funkcje pomocnicze w odczycie informacji genetycznej oraz syntezie białek.',
      },
    ],
    uwazajNa: [
      'Nie należy mylić tyminy z uracylem — tymina występuje wyłącznie w DNA, a uracyl wyłącznie w RNA; obie zasady łączą się (odpowiednio w swoim kwasie) z adeniną.',
      'DNA to nie to samo co gen czy chromosom — DNA to związek chemiczny (kwas nukleinowy), gen to fragment cząsteczki DNA zawierający informację o budowie jednego białka, a chromosom to silnie upakowana (skondensowana) cząsteczka DNA połączona z białkami.',
    ],
    musiszWiedziec: [
      'Zasada komplementarności zasad azotowych (A-T, G-C w DNA) jest podstawą wiernego kopiowania (replikacji) informacji genetycznej przed każdym podziałem komórki.',
    ],
    diagramy: ['d-t106-podwojna-helisa', 'd-t106-dna-rna-porownanie'],
    pytaniaKontrolne: ['p-t106-01', 'p-t106-05'],
  });
})();
