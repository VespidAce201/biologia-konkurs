(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-pierscienice-01',
    tematId: 't206-pierscienice',
    kolejnosc: 1,
    tytul: 'Pierścienice',
    wprowadzenie:
      'Pierścienice to typ zwierząt bezkręgowych, których ciało jest podzielone na liczne, podobne do siebie segmenty (pierścienie) — stąd nazwa grupy. Najlepiej poznanym przedstawicielem jest dżdżownica ziemna, pospolita mieszkanka wilgotnej gleby, ale do pierścienic należą też wodne wieloszczety (np. nereida) i pijawki.',
    sekcje: [
      {
        naglowek: 'Budowa ciała — segmentacja',
        diagramId: 'd-t206-pierscienice-budowa',
        akapity: [
          'Ciało pierścienic jest wydłużone i podzielone na wiele podobnych do siebie segmentów (metameria, segmentacja ciała). Każdy segment zawiera powtarzalny zestaw narządów — m.in. fragment jelita, parę zwojów nerwowych i narządy wydalnicze. Taka budowa jest cechą charakterystyczną całego typu i odróżnia pierścienice od niesegmentowanych płazińców i nicieni.',
          'W przeciwieństwie do płazińców, pierścienice mają jamę ciała wtórną (celom) — przestrzeń otoczoną własną błoną, wypełnioną płynem, w której zawieszone są narządy wewnętrzne. Celom działa też jak szkielet hydrauliczny, usztywniając ciało podczas ruchu.',
          'Na powierzchni większości segmentów dżdżownicy znajdują się drobne, sztywne szczecinki, które podczas pełzania zakotwiczają fragment ciała w podłożu, umożliwiając przesuwanie się kolejnych segmentów do przodu. Ciało pierścienic pokryte jest cienką, wilgotną skórą.',
        ],
      },
      {
        naglowek: 'Odżywianie, oddychanie i układ krwionośny',
        akapity: [
          'Dżdżownica żyje w wilgotnej glebie, którą przepuszcza przez przewód pokarmowy, odżywiając się zawartymi w niej szczątkami organicznymi (rozkładającymi się liśćmi, resztkami roślin). Przewód pokarmowy jest w pełni wykształcony, przechodzi przez całe ciało od otworu gębowego do odbytowego.',
          'Pierścienice nie mają narządów oddechowych — wymiana gazowa zachodzi przez całą, stale wilgotną powierzchnię skóry. Dlatego dżdżownice giną, gdy ich skóra wyschnie, i chowają się głęboko w glebie w czasie suszy.',
          'Pierścienice, w odróżnieniu od stawonogów i większości mięczaków, mają zamknięty układ krwionośny — krew (zawierająca rozpuszczoną hemoglobinę) płynie wyłącznie w naczyniach krwionośnych, a nie swobodnie w jamie ciała. Naczynie grzbietowe i brzuszne są połączone naczyniami obrączkowymi w przedniej części ciała, które pulsując, pełnią funkcję serc.',
        ],
      },
      {
        naglowek: 'Rozmnażanie i regeneracja',
        akapity: [
          'Dżdżownice są obojnakami (hermafrodytami) — każdy osobnik ma zarówno męskie, jak i żeńskie narządy rozrodcze. Mimo to nie dochodzi u nich do samozapłodnienia — podczas kopulacji dwa osobniki wymieniają się plemnikami, a zapłodnienie jest krzyżowe.',
          'Pogrubiony, jaśniejszy fragment ciała w przedniej części dżdżownicy nazywany jest paskiem (obrączką, clitellum). Jego komórki wydzielają śluzową otoczkę, z której po zapłodnieniu jaj powstaje ochronny kokon składany do gleby — z niego po pewnym czasie wykluwają się małe dżdżownice.',
          'Pierścienice mają dużą zdolność do regeneracji — dżdżownica potrafi odtworzyć niewielką liczbę utraconych segmentów przedniego lub tylnego końca ciała, co pomaga jej przetrwać uszkodzenia powodowane np. przez drapieżniki czy narzędzia ogrodnicze.',
        ],
      },
      {
        naglowek: 'Znaczenie pierścienic w przyrodzie i dla człowieka',
        akapity: [
          'Dżdżownice odgrywają ogromną rolę w kształtowaniu żyznej gleby: drążąc w niej korytarze, spulchniają ją i napowietrzają, ułatwiając wnikanie wody i wzrost korzeni roślin. Przepuszczając glebę wraz ze szczątkami organicznymi przez przewód pokarmowy, przyczyniają się do powstawania próchnicy.',
          'Wśród pierścienic są też gatunki wodne — wieloszczety (np. nereida), zamieszkujące morza, oraz pijawki, wśród których część to drapieżniki, a część (np. pijawka lekarska) to zewnętrzne pasożyty żywiące się krwią kręgowców; substancja hirudyna zawarta w ich ślinie zapobiega krzepnięciu krwi i była wykorzystywana w medycynie.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Pierścienice', definicja: 'Typ zwierząt bezkręgowych o ciele podzielonym na liczne, podobne segmenty (metameria), z celomem i zamkniętym układem krwionośnym.' },
      { termin: 'Metameria (segmentacja ciała)', definicja: 'Podział ciała na powtarzalne, podobne do siebie segmenty, z których każdy zawiera zestaw powtarzalnych narządów.' },
      { termin: 'Szczecinki', definicja: 'Drobne, sztywne wyrostki na segmentach ciała pierścienic, zakotwiczające ciało w podłożu podczas ruchu.' },
      { termin: 'Celom (jama ciała wtórna)', definicja: 'Przestrzeń otoczona własną błoną, wypełniona płynem, w której zawieszone są narządy wewnętrzne pierścienic; działa jak szkielet hydrauliczny.' },
      { termin: 'Zamknięty układ krwionośny', definicja: 'Układ, w którym krew płynie wyłącznie w naczyniach krwionośnych, a nie swobodnie w jamie ciała — cecha pierścienic.' },
      { termin: 'Pasek (obrączka, clitellum)', definicja: 'Pogrubiony fragment ciała dżdżownicy wytwarzający śluzową otoczkę, z której powstaje kokon jajowy.' },
      { termin: 'Kokon', definicja: 'Ochronna otoczka wytwarzana przez pasek dżdżownicy, w której rozwijają się zapłodnione jaja.' },
      { termin: 'Regeneracja', definicja: 'Zdolność organizmu do odtwarzania utraconych fragmentów ciała, dobrze rozwinięta u pierścienic.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Dżdżownica',
        b: 'Pijawka',
        roznica:
          'Dżdżownica żyje w wilgotnej glebie, ma na segmentach szczecinki i odżywia się szczątkami organicznymi zawartymi w glebie. Pijawka nie ma szczecinków, ma za to przyssawki na obu końcach ciała, żyje w środowisku wodnym lub wilgotnym i jest drapieżnikiem albo zewnętrznym pasożytem żywiącym się krwią.',
      },
    ],
    uwazajNa: [
      'Dżdżownice są obojnakami, ale nie zachodzi u nich samozapłodnienie — do rozmnażania zawsze potrzebne są dwa osobniki wymieniające się plemnikami (zapłodnienie krzyżowe).',
      'Pierścienice mają zamknięty układ krwionośny — to odróżnia je od stawonogów i większości mięczaków, u których układ krwionośny jest otwarty.',
    ],
    musiszWiedziec: [
      'Ciało pierścienic jest podzielone na liczne, podobne segmenty (metameria) — to najważniejsza cecha rozpoznawcza całej grupy.',
      'Pierścienice mają zamknięty układ krwionośny i oddychają całą powierzchnią wilgotnej skóry (brak wyspecjalizowanych narządów oddechowych).',
    ],
    diagramy: ['d-t206-pierscienice-budowa', 'd-t206-pierscienice-krwionosny'],
    pytaniaKontrolne: ['p-t206-pierscienice-01', 'p-t206-pierscienice-05'],
  });
})();
