(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-ryby-01',
    tematId: 't206-ryby',
    kolejnosc: 1,
    tytul: 'Ryby',
    wprowadzenie:
      'Ryby to najliczniejsza w gatunki i najstarsza ewolucyjnie gromada kręgowców. Od innych kręgowców odróżnia je zestaw przystosowań do stałego życia w wodzie: opływowy kształt ciała, oddychanie skrzelowe oraz płetwy służące do pływania.',
    sekcje: [
      {
        naglowek: 'Budowa zewnętrzna i przystosowanie do życia w wodzie',
        diagramId: 'd-t206-ryby-budowa',
        akapity: [
          'Ciało ryby ma kształt opływowy (torpedowaty), co znacznie zmniejsza opór wody podczas pływania. Powierzchnię ciała pokrywają łuski — cienkie, twarde płytki ułożone dachówkowato, chronione warstwą śluzu wydzielanego przez skórę. Śluz dodatkowo zmniejsza tarcie o wodę i utrudnia rozwój pasożytów i grzybów.',
          'Ryby poruszają się dzięki płetwom. Płetwy parzyste — piersiowe i brzuszne — służą głównie do sterowania kierunkiem i utrzymywania równowagi. Płetwy nieparzyste — grzbietowa, odbytowa i ogonowa — stabilizują ciało, a płetwa ogonowa jest głównym „silnikiem" napędzającym rybę do przodu.',
          'Wzdłuż boków ciała biegnie linia boczna — charakterystyczny dla ryb narząd zmysłu, który wykrywa drgania i prądy wody. Dzięki niej ryba wyczuwa przeszkody, ruch innych zwierząt i zmiany kierunku prądu nawet w mętnej wodzie lub w ciemności.',
        ],
      },
      {
        naglowek: 'Oddychanie i temperatura ciała',
        diagramId: 'd-t206-ryby-oddychanie',
        akapity: [
          'Ryby oddychają wyłącznie za pomocą skrzel — bogato unaczynionych blaszek położonych po obu stronach głowy, osłoniętych pokrywami skrzelowymi. Woda z rozpuszczonym w niej tlenem wpływa przez pysk, przepływa nad blaszkami skrzelowymi (gdzie tlen przenika do krwi, a dwutlenek węgla jest z niej usuwany), a następnie wypływa spod pokryw skrzelowych.',
          'Ryby są zwierzętami zmiennocieplnymi (pojkilotermicznymi) — temperatura ich ciała zależy od temperatury otaczającej wody i zmienia się razem z nią. W zimnej wodzie procesy życiowe ryb, w tym tempo pływania i trawienia, wyraźnie zwalniają.',
        ],
      },
      {
        naglowek: 'Rozmnażanie i rozwój',
        akapity: [
          'Większość ryb to zwierzęta jajorodne, u których zapłodnienie jest zewnętrzne i zachodzi w wodzie: samica składa jaja (ikrę), a samiec polewa je mleczem zawierającym plemniki. Do połączenia komórek płciowych dochodzi więc poza ciałem samicy.',
          'Ryby składają zwykle bardzo dużo jaj — u wielu gatunków opieka rodzicielska jest znikoma lub nie występuje wcale, a ogromna liczba ikry rekompensuje wysoką śmiertelność jaj i młodych ryb (zjadanych przez drapieżniki). Z ikry wykluwa się narybek, który rozwija się bez przeobrażenia, stopniowo upodabniając się do postaci dorosłej.',
        ],
      },
      {
        naglowek: 'Środowisko życia, przykłady i znaczenie',
        akapity: [
          'Ryby zasiedlają zarówno wody słodkie (rzeki, jeziora, stawy — np. karp, szczupak, pstrąg potokowy), jak i słone (morza i oceany — np. dorsz, śledź). Niektóre gatunki, jak łosoś, są wędrowne i część życia spędzają w morzu, a na tarło wracają do rzek.',
          'Ryby są ważnym ogniwem łańcuchów pokarmowych w ekosystemach wodnych, a dla człowieka stanowią cenne źródło pożywienia — zarówno dzięki połowom (rybołówstwo), jak i hodowli w stawach czy akwakulturze. Obecność i kondycja ryb bywa też wykorzystywana jako wskaźnik czystości wód.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Skrzela', definicja: 'Narząd oddechowy ryb — bogato unaczynione blaszki, przez które przenika tlen rozpuszczony w wodzie do krwi, a dwutlenek węgla jest z niej usuwany.' },
      { termin: 'Linia boczna', definicja: 'Narząd zmysłu ryb biegnący wzdłuż boków ciała, wykrywający drgania i prądy wody.' },
      { termin: 'Łuski', definicja: 'Cienkie, twarde płytki pokrywające ciało ryb, ułożone dachówkowato, chroniące skórę.' },
      { termin: 'Płetwy parzyste', definicja: 'Płetwy piersiowe i brzuszne, występujące w parach po bokach ciała — służą do sterowania i utrzymania równowagi.' },
      { termin: 'Płetwy nieparzyste', definicja: 'Płetwa grzbietowa, odbytowa i ogonowa, położone na linii środkowej ciała — stabilizują rybę, a płetwa ogonowa ją napędza.' },
      { termin: 'Zmiennocieplność (pojkilotermia)', definicja: 'Cecha zwierząt, których temperatura ciała zależy od temperatury otoczenia i zmienia się razem z nią.' },
      { termin: 'Ikra', definicja: 'Jaja ryb składane w wodzie, zapładniane zewnętrznie przez mlecz wydzielany przez samca.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Płetwy parzyste',
        b: 'Płetwy nieparzyste',
        roznica: 'Płetwy parzyste (piersiowe i brzuszne) występują w parach po obu bokach ciała i służą głównie do sterowania kierunkiem oraz utrzymania równowagi. Płetwy nieparzyste (grzbietowa, odbytowa, ogonowa) leżą pojedynczo na linii środkowej ciała, stabilizują je, a płetwa ogonowa dodatkowo napędza rybę.',
      },
    ],
    uwazajNa: [
      'Zapłodnienie u większości ryb jest zewnętrzne i zachodzi w wodzie — nie dochodzi do połączenia komórek płciowych wewnątrz ciała samicy, jak u wielu innych kręgowców.',
      'Ryby oddychają skrzelami przez całe życie — w odróżnieniu od płazów nie mają etapu rozwoju, w którym oddychają płucami.',
    ],
    musiszWiedziec: [
      'Opływowy kształt ciała, łuski pokryte śluzem oraz płetwy to zestaw przystosowań, które razem zmniejszają opór wody i umożliwiają sprawne pływanie — to klasyczny przykład zależności budowa → funkcja.',
      'Ryby są zmiennocieplne, oddychają skrzelami i rozmnażają się przez składanie jaj (ikry) zapładnianej zewnętrznie w wodzie.',
    ],
    diagramy: ['d-t206-ryby-budowa', 'd-t206-ryby-oddychanie'],
    pytaniaKontrolne: ['p-t206-ryby-k1', 'p-t206-ryby-k2'],
  });
})();
