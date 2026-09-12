(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t108-01',
    tematId: 't108',
    kolejnosc: 1,
    tytul: 'Organelle komórkowe i ich funkcje',
    wprowadzenie:
      'Komórka eukariotyczna przypomina niewielką "fabrykę" podzieloną na wyspecjalizowane działy — organelle. Każde organellum ma charakterystyczną budowę ściśle dopasowaną do pełnionej funkcji (zasada budowa → funkcja). Poznanie organelli i ich zadań to podstawa zrozumienia, jak działa komórka.',
    sekcje: [
      {
        naglowek: 'Jądro komórkowe — centrum sterowania',
        akapity: [
          'Jądro komórkowe jest zwykle największym organellum. Otoczone jest podwójną błoną (otoczką jądrową) z licznymi porami umożliwiającymi wymianę substancji między jądrem a cytoplazmą. Wewnątrz jądra znajduje się DNA (w formie chromatyny) niosące informację genetyczną oraz jąderko, w którym powstają rybosomy.',
          'Jądro pełni funkcję "centrum dowodzenia" komórki — przechowuje i zabezpiecza informację genetyczną oraz kontroluje wszystkie procesy zachodzące w komórce, w tym jej podziały.',
        ],
      },
      {
        naglowek: 'Mitochondrium i rybosomy',
        diagramId: 'd-t108-komorka-zwierzeca',
        akapity: [
          'Mitochondrium to organellum otoczone dwiema błonami — zewnętrzną gładką i wewnętrzną silnie pofałdowaną (tworzącą tzw. grzebienie mitochondrialne), które zwiększają powierzchnię, na jakiej zachodzi oddychanie komórkowe. To właśnie w mitochondriach z substancji odżywczych i tlenu wytwarzana jest energia w postaci ATP — dlatego mitochondria bywają nazywane "elektrowniami komórki". Ich liczba jest większa w komórkach o dużym zapotrzebowaniu na energię (np. komórkach mięśniowych).',
          'Rybosomy to drobne struktury zbudowane z RNA i białek — nie są otoczone błoną. Odpowiadają za syntezę (produkcję) białek na podstawie informacji odczytanej z DNA. Rybosomy występują swobodnie w cytoplazmie oraz przytwierdzone do siateczki śródplazmatycznej szorstkiej.',
        ],
      },
      {
        naglowek: 'Siateczka śródplazmatyczna i aparat Golgiego',
        akapity: [
          'Siateczka śródplazmatyczna (retikulum endoplazmatyczne) to system błon w kształcie kanalików i spłaszczonych zbiorników. Siateczka szorstka ma na powierzchni przytwierdzone rybosomy i uczestniczy w syntezie oraz wstępnej obróbce białek. Siateczka gładka nie ma rybosomów i odpowiada m.in. za produkcję lipidów oraz unieszkodliwianie substancji szkodliwych.',
          'Aparat Golgiego zbudowany jest ze stosu spłaszczonych, wygiętych błon (cystern). Odbiera on białka i inne substancje wytworzone w siateczce śródplazmatycznej, modyfikuje je, sortuje, "pakuje" w pęcherzyki i wysyła do odpowiednich miejsc w komórce lub na zewnątrz — działa więc jak komórkowe centrum pakowania i wysyłki.',
        ],
      },
      {
        naglowek: 'Organelle charakterystyczne dla komórki roślinnej',
        diagramId: 'd-t108-komorka-roslinna',
        akapity: [
          'Komórka roślinna, oprócz organelli wspólnych ze zwierzęcą, posiada dodatkowo: ścianę komórkową (sztywną warstwę na zewnątrz błony komórkowej, nadającą kształt i ochronę), chloroplasty (organelle otoczone dwiema błonami, zawierające zielony barwnik — chlorofil, w których zachodzi fotosynteza) oraz dużą, centralną wakuolę wypełnioną sokiem komórkowym, która magazynuje substancje, utrzymuje jędrność (turgor) komórki i reguluje gospodarkę wodną.',
          'Nie wszystkie te elementy są wyłączne dla roślin: małe wakuole mogą występować też w komórkach zwierzęcych i grzybów, ale nigdy nie są tak duże jak centralna wakuola komórki roślinnej. Ściana komórkowa i chloroplasty są natomiast typowe dla komórek roślin (ściana komórkowa występuje też, w innej postaci, u grzybów i bakterii).',
        ],
      },
    ],
    pojecia: [
      { termin: 'Jądro komórkowe', definicja: 'Organellum otoczone otoczką jądrową, przechowujące DNA i kontrolujące procesy zachodzące w komórce; zawiera jąderko produkujące rybosomy.' },
      { termin: 'Mitochondrium', definicja: 'Organellum otoczone dwiema błonami (wewnętrzna silnie pofałdowana), w którym zachodzi oddychanie komórkowe i produkcja energii w postaci ATP.' },
      { termin: 'Rybosom', definicja: 'Nieotoczona błoną struktura zbudowana z RNA i białek, odpowiedzialna za syntezę białek; wolna w cytoplazmie lub przytwierdzona do siateczki szorstkiej.' },
      { termin: 'Siateczka śródplazmatyczna szorstka', definicja: 'System błon z przytwierdzonymi rybosomami, uczestniczący w syntezie i obróbce białek.' },
      { termin: 'Siateczka śródplazmatyczna gładka', definicja: 'System błon bez rybosomów, uczestniczący w produkcji lipidów i unieszkodliwianiu substancji szkodliwych.' },
      { termin: 'Aparat Golgiego', definicja: 'Stos spłaszczonych błon (cystern) modyfikujący, sortujący i pakujący białka oraz inne substancje do transportu w komórce lub poza nią.' },
      { termin: 'Chloroplast', definicja: 'Organellum otoczone dwiema błonami, zawierające chlorofil, w którym zachodzi fotosynteza; występuje w komórkach roślin i niektórych protistów.' },
      { termin: 'Wakuola', definicja: 'Pęcherzyk otoczony błoną, wypełniony sokiem komórkowym; u roślin zwykle jedna, duża, centralna — magazynuje substancje i utrzymuje turgor komórki.' },
      { termin: 'Ściana komórkowa', definicja: 'Sztywna warstwa na zewnątrz błony komórkowej, nadająca komórce kształt i ochronę; u roślin zbudowana głównie z celulozy.' },
      { termin: 'Cytoplazma', definicja: 'Półpłynne środowisko wewnątrz komórki (poza jądrem), w którym zawieszone są wszystkie organelle.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Mitochondrium',
        b: 'Chloroplast',
        roznica:
          'Mitochondrium przeprowadza oddychanie komórkowe — rozkłada substancje odżywcze z udziałem tlenu, uwalniając energię w postaci ATP; występuje we WSZYSTKICH komórkach eukariotycznych. Chloroplast przeprowadza fotosyntezę — wykorzystuje energię światła do produkcji substancji odżywczych; występuje TYLKO w komórkach roślin i niektórych protistów.',
      },
      {
        a: 'Siateczka śródplazmatyczna szorstka',
        b: 'Aparat Golgiego',
        roznica:
          'Siateczka szorstka (z rybosomami na powierzchni) uczestniczy w SYNTEZIE i wstępnej obróbce białek. Aparat Golgiego przejmuje gotowe białka, MODYFIKUJE je, sortuje i pakuje do transportu — to kolejny etap "produkcji", a nie miejsce syntezy.',
      },
    ],
    uwazajNa: [
      'Mitochondria występują we WSZYSTKICH komórkach eukariotycznych (także zwierzęcych), a nie tylko w roślinnych — to bardzo częsty błąd.',
      'Nie każda komórka roślinna ma chloroplasty (np. komórki korzenia zwykle ich nie mają), ale chloroplasty występują wyłącznie w komórkach roślin (i niektórych protistów) — nigdy w komórkach zwierzęcych.',
      'Rybosomy NIE są otoczone błoną — to jedna z niewielu struktur komórki eukariotycznej, która nie jest organellum błonowym.',
      'Nie myl siateczki śródplazmatycznej (miejsce syntezy i wstępnej obróbki) z aparatem Golgiego (miejsce dalszej modyfikacji, sortowania i pakowania).',
    ],
    musiszWiedziec: [
      'Każde organellum ma budowę ściśle dopasowaną do pełnionej funkcji — to fundamentalna zasada biologii komórki (budowa → funkcja).',
      'Komórka roślinna różni się od zwierzęcej obecnością ściany komórkowej, chloroplastów i dużej centralnej wakuoli; poza tym organelle są w dużej mierze wspólne.',
    ],
    diagramy: ['d-t108-komorka-zwierzeca', 'd-t108-komorka-roslinna'],
    pytaniaKontrolne: ['p-t108-01', 'p-t108-15'],
  });
})();
