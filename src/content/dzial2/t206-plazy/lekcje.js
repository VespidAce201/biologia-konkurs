(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-plazy-01',
    tematId: 't206-plazy',
    kolejnosc: 1,
    tytul: 'Płazy',
    wprowadzenie:
      'Płazy (dawniej nazywane ziemnowodnymi) to gromada kręgowców, która jako pierwsza w historii Ziemi zdobyła środowisko lądowe, ale nigdy w pełni nie uniezależniła się od wody. Ich dwoiste życie — rozwój w wodzie i dorosłość na lądzie — widać w budowie, sposobie oddychania i rozmnażania.',
    sekcje: [
      {
        naglowek: 'Budowa zewnętrzna i skóra',
        diagramId: 'd-t206-plazy-budowa',
        akapity: [
          'Ciało płaza (na przykładzie żaby) dzieli się na głowę i tułów, bez wyraźnie wyodrębnionej szyi. Najbardziej charakterystyczną cechą płazów jest naga skóra, pozbawiona łusek, utrzymywana w stałej wilgoci dzięki licznym gruczołom śluzowym.',
          'Naga, wilgotna i bogato unaczyniona skóra pełni podwójną rolę: chroni organizm oraz stanowi dodatkowy narząd wymiany gazowej, przez który do krwi przenika tlen.',
          'Duże, wypukłe oczy dają płazom szerokie pole widzenia, a widoczna na powierzchni głowy błona bębenkowa (bez zewnętrznej małżowiny usznej) odbiera dźwięki.',
          'Kończyny tylne żab są znacznie dłuższe i silniejsze niż przednie — to przystosowanie do skakania na lądzie. Błony pławne rozpięte między palcami tylnych kończyn ułatwiają natomiast pływanie w wodzie.',
        ],
      },
      {
        naglowek: 'Oddychanie i temperatura ciała',
        akapity: [
          'Dorosłe płazy oddychają w sposób płucno-skórny: proste, workowate płuca uzupełnia oddychanie przez wilgotną skórę, przez którą przenika znaczna część potrzebnego tlenu. Dlatego skóra płaza musi pozostawać stale wilgotna — jej wysychanie utrudnia oddychanie skórne i zagraża zwierzęciu.',
          'Płazy są zwierzętami zmiennocieplnymi (pojkilotermicznymi) — temperatura ich ciała zależy od temperatury otoczenia. Gdy jesienią robi się zimno, płazy zapadają w odrętwienie zimowe, zwykle zagrzebane w mule na dnie zbiornika lub w wilgotnej ściółce.',
        ],
      },
      {
        naglowek: 'Rozmnażanie i rozwój — przeobrażenie',
        diagramId: 'd-t206-plazy-cykl',
        akapity: [
          'Zapłodnienie u większości płazów (np. żab) jest zewnętrzne i zachodzi w wodzie. Samica składa skrzek — jaja pozbawione twardej skorupy, otoczone jedynie galaretowatą osłonką — a samiec zapładnia je już poza jej ciałem.',
          'Z jaj wykluwają się kijanki, które oddychają skrzelami, mają ogon i nie mają jeszcze kończyn — pod tym względem przypominają ryby. W toku przeobrażenia (metamorfozy) kijanka stopniowo wykształca kończyny, traci ogon, a skrzela zastępują płuca. Dorosły płaz opuszcza wtedy wodę, zachowując zdolność powrotu do niej w okresie godowym.',
        ],
      },
      {
        naglowek: 'Środowisko życia, przykłady i znaczenie',
        akapity: [
          'Płazy prowadzą dwoiste życie: wczesne stadia rozwojowe (jaja, kijanki) rozwijają się w wodzie, a dorosłe formy większości gatunków żyją głównie na lądzie — zwykle w pobliżu zbiorników wodnych, do których wracają w okresie rozrodu.',
          'W Polsce do płazów należą m.in. żaba trawna, ropucha szara i rzekotka drzewna, a także traszka zwyczajna i salamandra plamista — te dwie ostatnie, w odróżnieniu od żab, zachowują ogon również jako dorosłe zwierzęta. Ze względu na przepuszczalną skórę, wrażliwą na zanieczyszczenia, płazy są dobrym wskaźnikiem (bioindykatorem) czystości środowiska.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Płazy (Amfibia)', definicja: 'Gromada kręgowców zmiennocieplnych o nagiej skórze, oddychających płucno-skórnie, których rozwój przebiega zwykle z przeobrażeniem w wodzie.' },
      { termin: 'Skóra naga', definicja: 'Pozbawiona łusek, wilgotna skóra płazów, pełniąca funkcję dodatkowego narządu oddechowego.' },
      { termin: 'Oddychanie płucno-skórne', definicja: 'Sposób oddychania dorosłych płazów, łączący wymianę gazową w płucach z wymianą gazową przez wilgotną skórę.' },
      { termin: 'Zmiennocieplność (pojkilotermia)', definicja: 'Cecha zwierząt, których temperatura ciała zależy od temperatury otoczenia i zmienia się razem z nią.' },
      { termin: 'Przeobrażenie (metamorfoza)', definicja: 'Proces przekształcania wodnej larwy (kijanki) w dorosłego płaza przystosowanego do życia na lądzie.' },
      { termin: 'Skrzek', definicja: 'Jaja płazów pozbawione twardej skorupy, otoczone galaretowatą osłonką, składane w wodzie.' },
      { termin: 'Kijanka', definicja: 'Larwalne stadium rozwojowe płaza — oddycha skrzelami, ma ogon i nie ma jeszcze kończyn.' },
      { termin: 'Błona bębenkowa', definicja: 'Widoczna na powierzchni głowy płaza struktura odbierająca dźwięki, zastępująca zewnętrzną małżowinę uszną.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Płazy',
        b: 'Gady',
        roznica: 'Płazy mają nagą, wilgotną skórę pełniącą funkcję dodatkowego narządu oddechowego i składają jaja bez skorupy (skrzek) w wodzie, z których wykluwają się kijanki przechodzące przeobrażenie. Gady mają suchą skórę pokrytą rogowymi łuskami, oddychają wyłącznie płucami i składają na lądzie jaja osłonięte elastyczną lub wapienną skorupą, z których wykluwają się młode już podobne do postaci dorosłej.',
      },
    ],
    uwazajNa: [
      'Skóra płazów musi pozostawać wilgotna, aby mogło zachodzić oddychanie skórne — dlatego płazy unikają suchych, nasłonecznionych miejsc, mimo że jako dorosłe żyją na lądzie.',
      'Nie każdy płaz przechodzi przeobrażenie w ten sam sposób — traszki i salamandry, w odróżnieniu od żab i ropuch, zachowują ogon również w postaci dorosłej.',
    ],
    musiszWiedziec: [
      'Naga, wilgotna skóra, oddychanie płucno-skórne oraz rozród w wodzie (jaja bez skorupy, kijanka oddychająca skrzelami) to zestaw cech ściśle wiążących płazy ze środowiskiem wodnym, mimo że dorosłe formy zdobyły również ląd — to klasyczny przykład zależności budowa → funkcja → środowisko.',
    ],
    diagramy: ['d-t206-plazy-budowa', 'd-t206-plazy-cykl'],
    pytaniaKontrolne: ['p-t206-plazy-k1', 'p-t206-plazy-k2'],
  });
})();
