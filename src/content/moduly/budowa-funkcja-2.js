(function () {
  'use strict';
  var register = window.App.content.register;

  // ROŚLINY

  register.budowaFunkcja({
    id: 'bf-aparaty-szparkowe',
    cecha: 'Aparaty szparkowe (szparki) w skórce liścia, zbudowane z dwóch komórek szparkowych zmieniających kształt',
    funkcja: 'Regulacja otwierania i zamykania szparek, a przez to kontrola parowania wody i wymiany gazowej',
    korzysc: 'Roślina ogranicza utratę wody w czasie suszy lub upału, zachowując możliwość wymiany CO2 i O2 potrzebnej do fotosyntezy',
    pytanie: 'Jaką funkcję pełnią komórki szparkowe aparatów szparkowych?',
    opcje: [
      'Magazynują substancje pokarmowe',
      'Otwierając i zamykając szparki, regulują parowanie wody i wymianę gazową',
      'Produkują barwniki chroniące przed promieniowaniem UV',
      'Umożliwiają wchłanianie wody z gleby',
    ],
    poprawna: 1,
    wyjasnienie: 'Komórki szparkowe zmieniają swój kształt i w ten sposób otwierają lub zamykają szparkę. Dzięki temu roślina może ograniczyć parowanie wody, zamykając szparki np. w czasie suszy lub upału, a otwierać je, gdy potrzebuje prowadzić fotosyntezę i wymieniać gazy z otoczeniem.',
  });

  register.budowaFunkcja({
    id: 'bf-ciernie-kaktus',
    cecha: 'Liście kaktusa przekształcone w ciernie (kolce)',
    funkcja: 'Znaczne zmniejszenie powierzchni parowania wody oraz odstraszanie zwierząt roślinożernych',
    korzysc: 'Roślina traci mniej wody w suchym środowisku pustynnym i jest chroniona przed zjedzeniem',
    pytanie: 'Jaką korzyść daje kaktusowi przekształcenie liści w ciernie?',
    opcje: [
      'Zwiększenie powierzchni fotosyntezy',
      'Ograniczenie parowania wody i obronę przed roślinożercami',
      'Ułatwienie zapylania przez owady',
      'Zwiększenie chłonności wody z powietrza',
    ],
    poprawna: 1,
    wyjasnienie: 'Zamiana liści w wąskie, twarde ciernie drastycznie zmniejsza powierzchnię, z której paruje woda (funkcję fotosyntezy przejmuje zielona łodyga), a dodatkowo kolce mechanicznie zniechęcają zwierzęta do zjadania rośliny — to podwójne przystosowanie do trudnych warunków pustyni.',
  });

  register.budowaFunkcja({
    id: 'bf-korzenie-oddechowe-bagno',
    cecha: 'Korzenie oddechowe (pneumatofory) wyrastające ponad muliste podłoże u roślin bagiennych, np. namorzynów',
    funkcja: 'Pobieranie tlenu z powietrza atmosferycznego przez specjalne otwory, gdy podłoże jest stale zalane wodą i ubogie w tlen',
    korzysc: 'Roślina może rosnąć i prawidłowo oddychać w podmokłym środowisku, w którym zwykłe korzenie uległyby zaduszeniu',
    pytanie: 'Do czego służą korzenie oddechowe roślin rosnących na terenach bagiennych?',
    opcje: [
      'Do wchłaniania dodatkowej wody',
      'Do pobierania tlenu z powietrza w warunkach zalanego, ubogiego w tlen podłoża',
      'Do rozmnażania wegetatywnego',
      'Do obrony przed roślinożercami',
    ],
    poprawna: 1,
    wyjasnienie: 'W mulistym, stale nawodnionym podłożu brakuje tlenu. Korzenie oddechowe wystają ponad powierzchnię wody lub mułu i przez specjalne otwory pobierają tlen z powietrza, dostarczając go do części korzenia znajdujących się w beztlenowym podłożu.',
  });

  register.budowaFunkcja({
    id: 'bf-nasiona-haczyki',
    cecha: 'Owoce z haczykowatymi wyrostkami (np. u łopianu, rzepika) lub nasiona wyposażone w puch (np. u mniszka lekarskiego)',
    funkcja: 'Haczyki umożliwiają przyczepianie się do sierści zwierząt i ubrania, a puch ułatwia unoszenie się na wietrze',
    korzysc: 'Nasiona są przenoszone na duże odległości od rośliny macierzystej, co zmniejsza konkurencję o zasoby i umożliwia zasiedlanie nowych terenów',
    pytanie: 'Jaką korzyść dają roślinie haczykowate wyrostki na owocach lub puch na nasionach?',
    opcje: [
      'Ochronę przed wysychaniem',
      'Ułatwienie rozsiewania nasion na duże odległości',
      'Zwiększenie tempa fotosyntezy',
      'Magazynowanie substancji zapasowych',
    ],
    poprawna: 1,
    wyjasnienie: 'Haczyki czepiają się sierści zwierząt lub ubrania człowieka, a puch pozwala nasionom unosić się na wietrze. Oba rozwiązania umożliwiają rozprzestrzenianie nasion daleko od rośliny macierzystej, co ogranicza konkurencję o światło, wodę i składniki pokarmowe.',
  });

  // GRZYBY / BAKTERIE / PROTISTY

  register.budowaFunkcja({
    id: 'bf-grzybnia-strzepki',
    cecha: 'Grzybnia zbudowana z wielu cienkich, silnie rozgałęzionych strzępek',
    funkcja: 'Ogromne zwiększenie powierzchni kontaktu grzyba z podłożem',
    korzysc: 'Sprawniejsze wchłanianie wody i rozłożonych substancji odżywczych z podłoża',
    pytanie: 'Jaką korzyść daje grzybowi budowa grzybni z licznych, cienkich strzępek?',
    opcje: [
      'Ochronę przed wysychaniem zarodników',
      'Zwiększenie powierzchni wchłaniania substancji odżywczych z podłoża',
      'Umożliwienie fotosyntezy',
      'Ułatwienie ruchu grzyba w podłożu',
    ],
    poprawna: 1,
    wyjasnienie: 'Cienkie, silnie rozgałęzione strzępki tworzą razem bardzo dużą powierzchnię w stosunku do objętości grzyba. Dzięki temu grzyb, odżywiający się przez wchłanianie rozłożonych substancji, może efektywnie pobierać wodę i pokarm z otaczającego podłoża.',
  });

  register.budowaFunkcja({
    id: 'bf-rzeski-pantofelek',
    cecha: 'Liczne rzęski pokrywające powierzchnię ciała pantofelka (orzęska)',
    funkcja: 'Skoordynowane ruchy rzęsek napędzają organizm w wodzie oraz wytwarzają prąd wody naganiający pokarm do otworu gębowego',
    korzysc: 'Sprawne przemieszczanie się w środowisku wodnym oraz efektywne zdobywanie pokarmu',
    pytanie: 'Jaką funkcję pełnią rzęski u pantofelka?',
    opcje: [
      'Służą do fotosyntezy',
      'Umożliwiają ruch w wodzie i naganianie pokarmu do otworu gębowego',
      'Chronią przed drapieżnikami poprzez maskowanie',
      'Służą wyłącznie do wymiany materiału genetycznego',
    ],
    poprawna: 1,
    wyjasnienie: 'Skoordynowane, falujące ruchy tysięcy rzęsek pokrywających ciało pantofelka napędzają go w wodzie, a jednocześnie wytwarzają prąd wodny, który zagarnia drobne cząstki pokarmu (np. bakterie) w stronę otworu gębowego.',
  });

  // BEZKRĘGOWCE

  register.budowaFunkcja({
    id: 'bf-zadlo-pszczola',
    cecha: 'Żądło połączone z gruczołem jadowym u pszczoły i innych owadów błonkoskrzydłych',
    funkcja: 'Wstrzykiwanie jadu do ciała napastnika podczas ukłucia',
    korzysc: 'Skuteczna obrona owada i całej rodziny (np. ula) przed drapieżnikami',
    pytanie: 'Jaką funkcję pełni żądło u pszczoły?',
    opcje: [
      'Pomaga w zbieraniu nektaru',
      'Służy do wstrzykiwania jadu w obronie przed napastnikiem',
      'Ułatwia orientację w przestrzeni',
      'Umożliwia oddychanie',
    ],
    poprawna: 1,
    wyjasnienie: 'Żądło jest przekształconym pokładełkiem połączonym z gruczołem jadowym. Podczas ukłucia pszczoła wstrzykuje jad, co skutecznie odstrasza lub obezwładnia napastnika i chroni owada oraz całą rodzinę pszczelą przed drapieżnikami.',
  });

  register.budowaFunkcja({
    id: 'bf-oczy-zlozone-owady',
    cecha: 'Oczy złożone (fasetkowe), zbudowane z wielu pojedynczych jednostek (omatidiów), u owadów',
    funkcja: 'Bardzo szerokie pole widzenia i wysoka czułość na ruch',
    korzysc: 'Szybkie wykrywanie zbliżającego się drapieżnika lub poruszającej się zdobyczy, co zwiększa szanse przeżycia',
    pytanie: 'Jaką korzyść daje owadowi budowa oka złożonego z wielu omatidiów?',
    opcje: [
      'Ostre widzenie barw w ciemności',
      'Szerokie pole widzenia i szybkie wykrywanie ruchu',
      'Zdolność do echolokacji',
      'Ochronę oka przed wysychaniem',
    ],
    poprawna: 1,
    wyjasnienie: 'Oko złożone składa się z tysięcy pojedynczych jednostek (omatidiów), z których każda odbiera obraz z niewielkiego wycinka otoczenia. Taka budowa zapewnia bardzo szerokie pole widzenia i dużą czułość na najmniejszy ruch, co pozwala owadowi szybko zareagować na zbliżające się zagrożenie.',
  });

  register.budowaFunkcja({
    id: 'bf-przyssawki-tasiemiec',
    cecha: 'Przyssawki i haczyki na główce (skoleksie) tasiemca',
    funkcja: 'Mocne przyczepianie się do ściany jelita żywiciela',
    korzysc: 'Pasożyt nie zostaje wydalony z przewodu pokarmowego wraz z treścią pokarmową i może stale czerpać z niego składniki odżywcze',
    pytanie: 'Do czego służą przyssawki i haczyki na główce tasiemca?',
    opcje: [
      'Do trawienia pokarmu',
      'Do mocnego przyczepiania się do ściany jelita żywiciela',
      'Do wykrywania światła',
      'Do rozmnażania płciowego',
    ],
    poprawna: 1,
    wyjasnienie: 'Skoleks tasiemca jest uzbrojony w przyssawki, a u niektórych gatunków dodatkowo w haczyki. Umożliwiają one trwałe zaczepienie się w jelicie żywiciela, dzięki czemu pasożyt nie jest wypłukiwany wraz z przesuwającą się treścią pokarmową i może całą powierzchnią ciała wchłaniać już strawiony pokarm.',
  });

  register.budowaFunkcja({
    id: 'bf-muszla-slimak',
    cecha: 'Twarda, wapienna muszla otaczająca ciało ślimaka',
    funkcja: 'Ochrona miękkiego ciała przed uszkodzeniami mechanicznymi i drapieżnikami oraz ograniczenie utraty wody',
    korzysc: 'Zwiększenie szans przetrwania, w tym możliwość życia poza środowiskiem wodnym bez nadmiernego wysychania ciała',
    pytanie: 'Jaką korzyść daje ślimakowi lądowemu posiadanie muszli?',
    opcje: [
      'Ułatwia oddychanie skrzelami',
      'Chroni ciało przed uszkodzeniem i nadmiernym wysychaniem',
      'Umożliwia szybszy ruch',
      'Służy do wytwarzania pokarmu',
    ],
    poprawna: 1,
    wyjasnienie: 'Muszla to twarda osłona, w którą ślimak może się schować w razie zagrożenia lub niekorzystnych warunków. Chroni ona miękkie ciało przed drapieżnikami i urazami mechanicznymi, a chowając się w niej i zamykając otwór śluzem, ślimak ogranicza też utratę wody przez wysychanie.',
  });

  // KRĘGOWCE

  register.budowaFunkcja({
    id: 'bf-ksztalt-ryba',
    cecha: 'Opływowy (wrzecionowaty) kształt ciała oraz płetwy u ryb',
    funkcja: 'Zmniejszenie oporu wody podczas pływania, a płetwy zapewniają napęd, sterowanie i utrzymywanie równowagi',
    korzysc: 'Sprawne, energooszczędne poruszanie się w środowisku wodnym, ważne przy zdobywaniu pokarmu i ucieczce przed drapieżnikami',
    pytanie: 'Jaką funkcję pełni opływowy kształt ciała ryby?',
    opcje: [
      'Ułatwia oddychanie tlenem atmosferycznym',
      'Zmniejsza opór wody podczas pływania',
      'Zwiększa widoczność dla innych ryb',
      'Umożliwia magazynowanie tłuszczu',
    ],
    poprawna: 1,
    wyjasnienie: 'Wrzecionowaty, opływowy kształt ciała minimalizuje opór stawiany przez wodę podczas ruchu, a płetwy (grzbietowa, ogonowa, piersiowe, brzuszne) zapewniają napęd, sterowanie kierunkiem i stabilizację — razem umożliwia to szybkie i energooszczędne pływanie.',
  });

  register.budowaFunkcja({
    id: 'bf-pluca-plaz',
    cecha: 'Płuca u dorosłych płazów, uzupełnione oddychaniem przez wilgotną skórę',
    funkcja: 'Pobieranie tlenu bezpośrednio z powietrza atmosferycznego',
    korzysc: 'Możliwość przebywania i zdobywania pokarmu na lądzie, poza środowiskiem wodnym, w którym żyły larwy oddychające skrzelami',
    pytanie: 'Jaką funkcję pełnią płuca u dorosłych płazów?',
    opcje: [
      'Umożliwiają pobieranie tlenu rozpuszczonego w wodzie',
      'Umożliwiają pobieranie tlenu z powietrza atmosferycznego',
      'Służą do produkcji jaj',
      'Regulują temperaturę ciała',
    ],
    poprawna: 1,
    wyjasnienie: 'W przeciwieństwie do larw (np. kijanek), które oddychają skrzelami w wodzie, dorosłe płazy mają płuca umożliwiające pobieranie tlenu z powietrza, wspomagane oddychaniem przez cienką, wilgotną skórę. Dzięki temu mogą przebywać i żerować również na lądzie.',
  });

  register.budowaFunkcja({
    id: 'bf-jajo-owodniowe',
    cecha: 'Jajo owodniowe z twardą lub skórzastą, częściowo przepuszczalną skorupą u gadów i ptaków',
    funkcja: 'Skorupa i błony płodowe chronią zarodek przed wysychaniem i urazami, umożliwiając jednocześnie wymianę gazową',
    korzysc: 'Rozwój zarodka może odbywać się na lądzie, bez konieczności składania jaj w wodzie',
    pytanie: 'Jaką korzyść daje gadom i ptakom jajo owodniowe z twardą skorupą?',
    opcje: [
      'Umożliwia rozmnażanie bezpłciowe',
      'Umożliwia rozwój zarodka na lądzie i chroni go przed wysychaniem',
      'Przyspiesza wzrost dorosłego osobnika',
      'Zwiększa zdolność do lotu',
    ],
    poprawna: 1,
    wyjasnienie: 'Skorupa razem z błonami płodowymi otaczającymi zarodek tworzy własne, wilgotne środowisko wewnątrz jaja i chroni je przed wysychaniem oraz uszkodzeniami mechanicznymi, umożliwiając przy tym wymianę gazową. Dzięki temu gady i ptaki mogą składać jaja na lądzie, niezależnie od zbiorników wodnych — w przeciwieństwie do płazów.',
  });

  register.budowaFunkcja({
    id: 'bf-pierze-puch-izolacja',
    cecha: 'Miękkie, puszyste pióra puchowe znajdujące się pod piórami okrywowymi, bezpośrednio przy skórze ptaka',
    funkcja: 'Zatrzymywanie warstwy nieruchomego, ogrzanego powietrza przy ciele',
    korzysc: 'Skuteczna izolacja termiczna, utrzymanie stałej, wysokiej temperatury ciała mimo zmiennych warunków otoczenia',
    pytanie: 'Jaką funkcję pełnią pióra puchowe u ptaków?',
    opcje: [
      'Umożliwiają lot',
      'Zapewniają izolację termiczną, zatrzymując ciepłe powietrze przy ciele',
      'Służą do wabienia partnera barwą',
      'Chronią przed promieniowaniem UV',
    ],
    poprawna: 1,
    wyjasnienie: 'Puch, w odróżnieniu od sztywnych piór lotnych, ma luźną budowę i tworzy warstwę zatrzymującą ogrzane przez ciało powietrze przy skórze. Działa jak naturalny kożuszek termoizolacyjny, pozwalając ptakom, jako zwierzętom stałocieplnym, utrzymać wysoką temperaturę ciała nawet w chłodnym otoczeniu.',
  });

  register.budowaFunkcja({
    id: 'bf-szyja-zyrafa',
    cecha: 'Bardzo długa szyja żyrafy',
    funkcja: 'Umożliwia sięganie do liści znajdujących się wysoko w koronach drzew, niedostępnych dla innych roślinożerców',
    korzysc: 'Dostęp do dodatkowego źródła pokarmu i zmniejszenie konkurencji pokarmowej z innymi zwierzętami roślinożernymi',
    pytanie: 'Jaką korzyść daje żyrafie bardzo długa szyja?',
    opcje: [
      'Ułatwia ucieczkę przed drapieżnikami dzięki szybszemu biegowi',
      'Umożliwia dostęp do liści wysoko na drzewach, niedostępnych dla innych roślinożerców',
      'Poprawia zmysł węchu',
      'Ułatwia rozmnażanie',
    ],
    poprawna: 1,
    wyjasnienie: 'Długa szyja, mimo że zbudowana tak jak u większości ssaków tylko z siedmiu kręgów szyjnych, pozwala żyrafie sięgać po liście w górnych partiach koron drzew. Dzięki temu żyrafa zdobywa pokarm niedostępny dla innych roślinożerców i unika z nimi bezpośredniej konkurencji o pożywienie.',
  });

  register.budowaFunkcja({
    id: 'bf-futro-zajac-bielak',
    cecha: 'Futro zająca bielaka zmieniające barwę sezonowo — brązowe latem, białe zimą',
    funkcja: 'Upodobnienie ubarwienia sierści do koloru otoczenia — brązowej ziemi i roślinności latem, śniegu zimą',
    korzysc: 'Skuteczny kamuflaż utrudniający wykrycie zająca przez drapieżniki przez cały rok',
    pytanie: 'Jaką korzyść daje zającowi bielakowi sezonowa zmiana barwy futra?',
    opcje: [
      'Lepszą izolację termiczną zimą niż latem',
      'Skuteczne maskowanie się na tle otoczenia niezależnie od pory roku',
      'Szybszy wzrost młodych osobników',
      'Ułatwienie znajdowania partnera do rozrodu',
    ],
    poprawna: 1,
    wyjasnienie: 'Latem brązowe futro zająca bielaka upodabnia się do barwy gleby i roślinności, a zimą białe futro zlewa się ze śniegiem. Taki kamuflaż przez cały rok utrudnia drapieżnikom wypatrzenie zająca, zwiększając jego szanse na przeżycie.',
  });
})();
