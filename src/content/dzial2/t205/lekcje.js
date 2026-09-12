(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t205-01',
    tematId: 't205',
    kolejnosc: 1,
    tytul: 'Grzyby — organizmy cudzożywne',
    wprowadzenie:
      'Grzyby stanowią odrębne królestwo organizmów, różne zarówno od roślin, jak i od zwierząt. Podobnie jak zwierzęta, są cudzożywne — nie potrafią samodzielnie wytwarzać związków organicznych z nieorganicznych, lecz pobierają gotowe substancje odżywcze z otoczenia. Ich charakterystyczna budowa i sposób odżywiania sprawiają, że pełnią w przyrodzie niezastąpioną rolę.',
    sekcje: [
      {
        naglowek: 'Budowa grzyba — grzybnia i owocnik',
        diagramId: 'd-t205-owocnik',
        akapity: [
          'Właściwym ciałem grzyba jest grzybnia — gęsto rozgałęziona sieć cienkich nitek zwanych strzępkami. Grzybnia rozwija się zwykle w podłożu (glebie, drewnie, resztkach organicznych) i to ona pobiera wodę oraz substancje odżywcze, wydzielając na zewnątrz ciała enzymy trawienne.',
          'To, co potocznie nazywamy „grzybem” rosnącym na powierzchni ziemi, czyli owocnik (np. kapelusz na trzonie), jest jedynie organem służącym do wytwarzania i rozsiewania zarodników. Owocnik składa się z kapelusza i trzonu; pod kapeluszem znajdują się blaszki lub rurki, na których powstają zarodniki.',
          'Ściana komórkowa grzybów zbudowana jest z chityny — tego samego twardego polisacharydu, który buduje pancerze owadów. To jedna z cech odróżniających grzyby od roślin, których ściana komórkowa zbudowana jest z celulozy.',
        ],
      },
      {
        naglowek: 'Sposoby odżywiania się grzybów',
        diagramId: 'd-t205-odzywianie',
        akapity: [
          'Grzyby są cudzożywne, co oznacza, że nie przeprowadzają fotosyntezy i muszą pobierać gotowe związki organiczne. Wyróżnia się trzy podstawowe strategie odżywiania grzybów.',
          'Grzyby saprotroficzne (saprotrofy) rozkładają martwą materię organiczną — obumarłe rośliny, zwierzęta, opadłe liście czy próchniejące drewno. Dzięki temu odgrywają kluczową rolę w obiegu materii w przyrodzie, uwalniając ze szczątków składniki mineralne z powrotem do środowiska.',
          'Grzyby pasożytnicze czerpią substancje odżywcze z żywych organizmów (roślin, zwierząt, także człowieka), wyrządzając im szkodę — przykładem są grzyby wywołujące choroby roślin uprawnych lub grzybice skóry u człowieka.',
          'Wiele grzybów tworzy mikoryzę — korzystną dla obu stron symbiozę z korzeniami drzew i innych roślin. Grzyb otrzymuje od rośliny cukry powstałe w fotosyntezie, a w zamian dostarcza jej wodę i sole mineralne pobrane z dużo większej powierzchni gleby dzięki rozległej grzybni.',
        ],
      },
      {
        naglowek: 'Rozmnażanie grzybów',
        akapity: [
          'Grzyby rozmnażają się najczęściej za pomocą zarodników — mikroskopijnych, bardzo lekkich struktur rozprzestrzenianych przez wiatr, wodę lub zwierzęta. Zarodniki powstają w owocnikach (u grzybów wielkoowocnikowych) na blaszkach lub w rurkach pod kapeluszem.',
          'Po opadnięciu na sprzyjające podłoże zarodnik kiełkuje, wytwarzając nową grzybnię, z której z czasem, w odpowiednich warunkach wilgotności i temperatury, wyrastają kolejne owocniki.',
        ],
      },
      {
        naglowek: 'Znaczenie grzybów w przyrodzie i dla człowieka',
        akapity: [
          'Grzyby jako saprotrofy są jednymi z najważniejszych organizmów rozkładających materię organiczną — bez nich martwe szczątki roślin i zwierząt gromadziłyby się, a pierwiastki niezbędne do życia nie wracałyby do obiegu w przyrodzie.',
          'Dla człowieka grzyby mają znaczenie gospodarcze i zdrowotne: niektóre gatunki są jadalne i cenione kulinarnie, inne — silnie trujące, dlatego zbieranie grzybów w naturze wymaga dużej wiedzy. Drożdże (grzyby jednokomórkowe) wykorzystuje się w piekarnictwie i produkcji napojów, a pleśnie — m.in. do produkcji niektórych serów oraz antybiotyków (np. penicyliny). Pleśnie mogą też psuć żywność i wywoływać choroby.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Grzybnia', definicja: 'Właściwe ciało grzyba — gęsta sieć nitkowatych strzępek rozwijająca się zwykle w podłożu, pobierająca wodę i substancje odżywcze.' },
      { termin: 'Strzępka', definicja: 'Pojedyncza nitka grzybni, z których zbudowana jest cała grzybnia.' },
      { termin: 'Owocnik', definicja: 'Organ grzyba wielkoowocnikowego (np. kapelusz na trzonie) służący do wytwarzania i rozsiewania zarodników.' },
      { termin: 'Zarodnik', definicja: 'Mikroskopijna struktura rozmnożeniowa grzybów, z której po skiełkowaniu powstaje nowa grzybnia.' },
      { termin: 'Chityna', definicja: 'Twardy polisacharyd budujący ścianę komórkową grzybów (oraz pancerze owadów).' },
      { termin: 'Saprotrofizm', definicja: 'Sposób odżywiania polegający na rozkładzie martwej materii organicznej.' },
      { termin: 'Pasożytnictwo', definicja: 'Sposób odżywiania polegający na czerpaniu substancji odżywczych z żywego organizmu ze szkodą dla niego.' },
      { termin: 'Mikoryza', definicja: 'Korzystna dla obu stron symbioza grzyba z korzeniami rośliny — wymiana wody i soli mineralnych na cukry.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Grzyby',
        b: 'Rośliny',
        roznica:
          'Grzyby są cudzożywne (pobierają gotowe substancje organiczne) i mają ścianę komórkową z chityny; rośliny są samożywne (przeprowadzają fotosyntezę) i mają ścianę komórkową z celulozy. Mimo potocznego mylenia grzybów z roślinami, są to organizmy należące do odrębnego królestwa.',
      },
    ],
    uwazajNa: [
      'Grzyby, mimo że rosną osadzone w podłożu i kojarzą się z roślinami, NIE są roślinami — nie mają chlorofilu i nie przeprowadzają fotosyntezy, są cudzożywne, a ich ściana komórkowa zbudowana jest z chityny, a nie z celulozy.',
      'To, co widzimy nad ziemią (kapelusz z trzonem), to tylko owocnik — niewielka część grzyba służąca rozmnażaniu; główna część organizmu, czyli grzybnia, znajduje się w podłożu i bywa dużo większa i trwalsza od samego owocnika.',
    ],
    musiszWiedziec: [
      'Grzyby są cudzożywne — nie przeprowadzają fotosyntezy i pobierają gotowe związki organiczne z otoczenia (jako saprotrofy, pasożyty lub w mikoryzie).',
      'Grzyby rozmnażają się za pomocą zarodników powstających w owocnikach.',
    ],
    diagramy: ['d-t205-owocnik', 'd-t205-odzywianie'],
    pytaniaKontrolne: ['p-t205-k1', 'p-t205-k2'],
  });
})();
