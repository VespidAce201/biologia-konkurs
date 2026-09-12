(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-mieczaki-01',
    tematId: 't206-mieczaki',
    kolejnosc: 1,
    tytul: 'Mięczaki',
    wprowadzenie:
      'Mięczaki to typ zwierząt bezkręgowych o miękkim, niesegmentowanym ciele. Obejmuje trzy główne, bardzo różniące się od siebie grupy: ślimaki, małże i głowonogi. Mięczaki zasiedlają wody słodkie, morza oraz środowisko lądowe, a wiele gatunków ma duże znaczenie gospodarcze.',
    sekcje: [
      {
        naglowek: 'Budowa ciała mięczaków',
        diagramId: 'd-t206-mieczaki-slimak',
        akapity: [
          'Ciało mięczaków jest miękkie i niesegmentowane, zbudowane zwykle z trzech głównych części: głowy (z narządami zmysłów), nogi (mięsistego narządu ruchu) oraz tułowia trzewiowego, w którym mieszczą się narządy wewnętrzne. Ciało okrywa płaszcz — fałd skóry, który u większości gatunków wydziela muszlę zbudowaną głównie z węglanu wapnia.',
          'Wiele mięczaków (ślimaki, głowonogi) ma w jamie gębowej tarkę (radulę) — narząd pokryty drobnymi, chitynowymi ząbkami, służący do zeskrobywania i rozdrabniania pokarmu, np. glonów porastających podłoże.',
          'Większość mięczaków ma otwarty układ krwionośny, w którym hemolimfa częściowo swobodnie wypełnia jamę ciała. Wyjątkiem są głowonogi — jako jedyna grupa mięczaków mają zamknięty układ krwionośny, co wiąże się z ich aktywnym trybem życia.',
        ],
      },
      {
        naglowek: 'Ślimaki, małże i głowonogi',
        akapity: [
          'Ślimaki mają zwykle jedną, często spiralnie skręconą muszlę, wyraźnie wyodrębnioną głowę z czułkami i oczami oraz szeroką nogę, po której pełzają. Żyją w wodzie i na lądzie; ślimaki lądowe (np. ślimak winniczek) oddychają płucem, a wodne — najczęściej skrzelami.',
          'Małże mają muszlę zbudowaną z dwóch połówek (klap) połączonych więzadłem, które mogą się otwierać i zamykać dzięki mięśniom zwieraczom. Nie mają wyodrębnionej głowy ani tarki — są filtratorami: pobierają wodę i odfiltrowują z niej za pomocą skrzeli drobne cząstki pokarmowe. Przykłady: omułek, skójka, ostryga.',
          'Głowonogi (np. ośmiornica, kałamarnica, mątwa) mają zredukowaną, ukrytą pod skórą lub całkowicie zanikłą muszlę. Wokół głowy mają wieniec macek (ramion) z przyssawkami, służących do chwytania zdobyczy. Poruszają się dzięki napędowi odrzutowemu — wyrzucając strumień wody przez lejek. Mają dobrze rozwinięty mózg, duże, sprawne oczy i chromatofory w skórze, dzięki którym mogą szybko zmieniać barwę ciała (np. w celu maskowania się).',
        ],
      },
      {
        naglowek: 'Znaczenie mięczaków w przyrodzie i dla człowieka',
        akapity: [
          'Małże, filtrując duże ilości wody w poszukiwaniu pokarmu, oczyszczają zbiorniki wodne i są wykorzystywane jako bioindykatory (wskaźniki) czystości wody. Niektóre gatunki małży wytwarzają perły, gdy ciało obce dostanie się między płaszcz a muszlę.',
          'Ślimaki, małże i głowonogi są od dawna wykorzystywane jako pokarm człowieka w wielu regionach świata. Z drugiej strony niektóre ślimaki (zwłaszcza ślimaki nagie, tzw. ślinik) są uciążliwymi szkodnikami roślin uprawnych i ogrodowych.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Mięczaki', definicja: 'Typ zwierząt bezkręgowych o miękkim, niesegmentowanym ciele zbudowanym z głowy, nogi i tułowia trzewiowego, okrytym płaszczem.' },
      { termin: 'Płaszcz', definicja: 'Fałd skóry okrywający ciało mięczaka, wydzielający zwykle muszlę.' },
      { termin: 'Muszla', definicja: 'Twarda okrywa ochronna zbudowana głównie z węglanu wapnia, wydzielana przez płaszcz mięczaków.' },
      { termin: 'Noga', definicja: 'Mięsisty narząd ruchu mięczaków, u ślimaków służący do pełzania, u głowonogów przekształcony m.in. w macki i lejek.' },
      { termin: 'Tarka (radula)', definicja: 'Narząd pokryty drobnymi, chitynowymi ząbkami w jamie gębowej ślimaków i głowonogów, służący do zeskrobywania pokarmu.' },
      { termin: 'Chromatofory', definicja: 'Komórki barwnikowe w skórze głowonogów, umożliwiające szybką zmianę barwy ciała.' },
      { termin: 'Napęd odrzutowy', definicja: 'Sposób poruszania się głowonogów polegający na gwałtownym wyrzucaniu strumienia wody przez lejek.' },
      { termin: 'Filtrator', definicja: 'Organizm odżywiający się przez odfiltrowywanie drobnych cząstek pokarmowych z wody (np. małże za pomocą skrzeli).' },
    ],
    zapamietajRoznice: [
      {
        a: 'Ślimak',
        b: 'Małż',
        roznica:
          'Ślimak ma zwykle jedną, często spiralnie skręconą muszlę, wyraźną głowę z czułkami i oczami oraz tarkę do zeskrobywania pokarmu, porusza się pełznąc na szerokiej nodze. Małż ma muszlę dwuczęściową (dwie klapy), nie ma wyodrębnionej głowy ani tarki, a pokarm (cząstki zawieszone w wodzie) filtruje za pomocą skrzeli.',
      },
      {
        a: 'Małż',
        b: 'Głowonóg',
        roznica:
          'Małż ma zewnętrzną, dwuczęściową muszlę i prowadzi osiadły lub mało ruchliwy tryb życia jako filtrator. Głowonóg (np. ośmiornica) ma zredukowaną lub niewidoczną muszlę, dobrze rozwinięte macki, oczy i mózg, porusza się aktywnie dzięki napędowi odrzutowemu i poluje jako drapieżnik.',
      },
    ],
    uwazajNa: [
      'Głowonogi, w przeciwieństwie do większości mięczaków (np. ślimaków i małży), mają zamknięty, a nie otwarty układ krwionośny — to częsty błąd w odpowiedziach na pytania konkursowe.',
      'Nie wszystkie mięczaki mają widoczną z zewnątrz muszlę — u głowonogów jest ona zredukowana lub całkowicie zanikła.',
    ],
    musiszWiedziec: [
      'Ciało mięczaków zbudowane jest z głowy, nogi i tułowia trzewiowego, okrytego płaszczem, który zwykle wydziela muszlę.',
      'Do mięczaków należą trzy główne grupy: ślimaki (jedna muszla, tarka), małże (dwuczęściowa muszla, filtratory, brak głowy) i głowonogi (zredukowana muszla, macki, napęd odrzutowy, zamknięty układ krwionośny).',
    ],
    diagramy: ['d-t206-mieczaki-slimak', 'd-t206-mieczaki-glowonog'],
    pytaniaKontrolne: ['p-t206-mieczaki-01', 'p-t206-mieczaki-05'],
  });
})();
