(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t103-01',
    tematId: 't103',
    kolejnosc: 1,
    tytul: 'Białka',
    wprowadzenie:
      'Białka to związki organiczne zbudowane z aminokwasów, pełniące w organizmach żywych więcej różnorodnych funkcji niż jakakolwiek inna grupa związków chemicznych. Budują tkanki, przyspieszają reakcje chemiczne jako enzymy, transportują substancje, bronią organizm przed patogenami i regulują jego pracę jako hormony.',
    sekcje: [
      {
        naglowek: 'Budowa białek — aminokwasy i wiązanie peptydowe',
        diagramId: 'd-t103-wiazanie-peptydowe',
        akapity: [
          'Podstawową jednostką budującą białka jest aminokwas — mała cząsteczka zawierająca grupę aminową (-NH2), grupę karboksylową (-COOH) oraz charakterystyczny dla danego aminokwasu podstawnik zwany grupą R (resztą boczną). W organizmach żywych występuje 20 podstawowych aminokwasów białkowych.',
          'Dwa aminokwasy łączą się ze sobą w reakcji kondensacji: grupa karboksylowa jednego aminokwasu reaguje z grupą aminową drugiego, tworząc wiązanie peptydowe, a jako produkt uboczny uwalniana jest cząsteczka wody. Powstały w ten sposób związek dwóch aminokwasów to dipeptyd, a długi łańcuch wielu aminokwasów połączonych wiązaniami peptydowymi to polipeptyd (białko).',
          'Kolejność (sekwencja) aminokwasów w łańcuchu białkowym jest ściśle określona i zakodowana w materiale genetycznym komórki. Nawet zamiana jednego aminokwasu na inny może istotnie zmienić kształt, a tym samym funkcję całego białka.',
        ],
      },
      {
        naglowek: 'Poziomy struktury przestrzennej białka',
        diagramId: 'd-t103-struktury-bialka',
        akapity: [
          'Struktura I-rzędowa to liniowa sekwencja aminokwasów połączonych wiązaniami peptydowymi — to ona jest zapisana bezpośrednio w informacji genetycznej i determinuje wszystkie wyższe poziomy organizacji białka.',
          'Struktura II-rzędowa powstaje, gdy fragmenty łańcucha przybierają regularny, powtarzalny kształt (np. helisę lub tzw. harmonijkę) dzięki wiązaniom wodorowym tworzącym się między różnymi miejscami tego samego łańcucha.',
          'Struktura III-rzędowa to trójwymiarowe, przestrzenne zwinięcie całego łańcucha polipeptydowego w charakterystyczny, zwarty kształt, stabilizowany przez oddziaływania między grupami R poszczególnych aminokwasów. To właśnie ostateczny kształt przestrzenny decyduje o funkcji białka.',
          'Niektóre białka zbudowane są z kilku odrębnych łańcuchów polipeptydowych połączonych razem — taki poziom organizacji nazywamy strukturą IV-rzędową (przykładem jest hemoglobina, złożona z czterech podjednostek).',
        ],
      },
      {
        naglowek: 'Funkcje białek w organizmie',
        akapity: [
          'Białka pełnią funkcję budulcową — wchodzą w skład błon komórkowych, tworzą włókna mięśniowe, kolagen skóry i ścięgien, keratynę włosów i paznokci.',
          'Białka enzymatyczne (enzymy) przyspieszają przebieg reakcji chemicznych w organizmie, np. trawiennych — amylaza rozkłada skrobię, a proteazy rozkładają białka pokarmowe.',
          'Białka pełnią funkcję transportową (np. hemoglobina przenosząca tlen we krwi), odpornościową (przeciwciała rozpoznające i neutralizujące patogeny) oraz regulacyjną — niektóre hormony, np. insulina, są białkami sterującymi procesami w organizmie.',
          'W przeciwieństwie do tłuszczów i węglowodanów białka nie są głównym materiałem zapasowym organizmu — ich podstawowa rola to budowa i regulacja procesów życiowych, choć w sytuacji skrajnego głodu mogą być też wykorzystane jako źródło energii.',
        ],
      },
      {
        naglowek: 'Denaturacja białek',
        akapity: [
          'Denaturacja to trwałe (najczęściej nieodwracalne) zniszczenie przestrzennej struktury białka (II, III i IV-rzędowej) pod wpływem czynników takich jak wysoka temperatura, silnie kwaśne lub zasadowe pH, promieniowanie UV czy obecność metali ciężkich.',
          'Podczas denaturacji wiązania peptydowe łączące aminokwasy w łańcuchu (struktura I-rzędowa) pozostają nienaruszone — zmienia się jedynie kształt przestrzenny cząsteczki. Ponieważ funkcja białka zależy właśnie od tego kształtu, zdenaturowane białko najczęściej traci swoją biologiczną aktywność (np. enzym przestaje katalizować reakcję).',
          'Klasycznym przykładem denaturacji jest ścinanie się białka jaja kurzego podczas gotowania — przezroczyste białko jaja pod wpływem temperatury staje się białe i stałe, ponieważ cząsteczki białka nieodwracalnie zmieniają swój kształt przestrzenny.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Aminokwas', definicja: 'Podstawowa jednostka budująca białka, zawierająca grupę aminową, grupę karboksylową i charakterystyczną grupę R.' },
      { termin: 'Wiązanie peptydowe', definicja: 'Wiązanie chemiczne łączące grupę karboksylową jednego aminokwasu z grupą aminową drugiego, powstające z uwolnieniem cząsteczki wody.' },
      { termin: 'Białko (polipeptyd)', definicja: 'Związek organiczny zbudowany z wielu aminokwasów połączonych wiązaniami peptydowymi w łańcuch.' },
      { termin: 'Struktura I-rzędowa', definicja: 'Liniowa kolejność (sekwencja) aminokwasów w łańcuchu białkowym.' },
      { termin: 'Struktura II-rzędowa', definicja: 'Regularny, lokalny kształt fragmentu łańcucha białkowego (np. helisa lub harmonijka) utrzymywany wiązaniami wodorowymi.' },
      { termin: 'Struktura III-rzędowa', definicja: 'Trójwymiarowe, przestrzenne zwinięcie całego łańcucha polipeptydowego, decydujące o funkcji białka.' },
      { termin: 'Struktura IV-rzędowa', definicja: 'Poziom organizacji białka złożonego z kilku odrębnych łańcuchów polipeptydowych połączonych w jedną funkcjonalną cząsteczkę.' },
      { termin: 'Denaturacja', definicja: 'Nieodwracalne (najczęściej) zniszczenie przestrzennej struktury białka pod wpływem wysokiej temperatury, skrajnego pH lub innych czynników, prowadzące do utraty jego aktywności biologicznej.' },
      { termin: 'Enzym', definicja: 'Białko przyspieszające (katalizujące) przebieg reakcji chemicznych w organizmie.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Denaturacja białka',
        b: 'Trawienie (hydroliza) białka',
        roznica: 'Denaturacja niszczy tylko przestrzenny kształt białka (struktury II, III, IV-rzędowej), a wiązania peptydowe pozostają nienaruszone. Trawienie polega na rozrywaniu samych wiązań peptydowych (hydroliza struktury I-rzędowej) i rozkładaniu białka na pojedyncze aminokwasy.',
      },
    ],
    uwazajNa: [
      'Ugotowanie białka jaja to denaturacja, a nie trawienie — wiązania peptydowe pozostają nienaruszone, zmienia się tylko kształt przestrzenny cząsteczek. Trawienie białek zachodzi dopiero w przewodzie pokarmowym pod wpływem enzymów proteolitycznych.',
      'Białka nie są głównym materiałem zapasowym organizmu (tę rolę pełnią głównie tłuszcze i węglowodany) — pomyłka ta jest częsta, ponieważ białka kojarzą się z "budulcem", a nie z magazynowaniem energii.',
    ],
    musiszWiedziec: [
      'Sekwencja aminokwasów (struktura I-rzędowa) decyduje o sposobie przestrzennego zwinięcia białka, a ten kształt bezpośrednio determinuje jego funkcję — to podstawowa zależność budowa-funkcja w świecie białek.',
    ],
    diagramy: ['d-t103-wiazanie-peptydowe', 'd-t103-struktury-bialka'],
    pytaniaKontrolne: ['p-t103-01', 'p-t103-05'],
  });
})();
