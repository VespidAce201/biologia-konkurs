(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-plazince-01',
    tematId: 't206-plazince',
    kolejnosc: 1,
    tytul: 'Płazińce',
    wprowadzenie:
      'Płazińce to grupa zwierząt bezkręgowych o wydłużonym, silnie spłaszczonym grzbietowo-brzusznie ciele. Obejmuje zarówno formy wolno żyjące (np. wypławki), jak i liczne gatunki pasożytnicze (np. tasiemce, przywry), z których część pasożytuje również w organizmie człowieka.',
    sekcje: [
      {
        naglowek: 'Budowa ciała płazińców',
        akapity: [
          'Ciało płazińców jest spłaszczone grzbietowo-brzusznie i wykazuje symetrię dwuboczną (dwustronną) — można je podzielić jedną płaszczyzną na dwie lustrzane połowy. Płazińce są zwierzętami bezjamowymi — nie mają jamy ciała, a przestrzeń między narządami wypełnia luźna tkanka zwana miąższem (mezenchymą).',
          'Płazińce nie mają układu krwionośnego ani układu oddechowego. U form wolno żyjących wymiana gazowa (pobieranie tlenu i oddawanie dwutlenku węgla) zachodzi przez całą powierzchnię ciała — spłaszczony kształt znacznie zwiększa tę powierzchnię w stosunku do objętości ciała. Gatunki pasożytnicze żyjące w jelitach żywiciela (np. tasiemce) prowadzą oddychanie beztlenowe.',
          'Układ nerwowy płazińców ma budowę drabinkową: na przednim końcu ciała znajdują się zwoje nerwowe (skupiska komórek nerwowych), od których biegną ku tyłowi ciała podłużne pnie nerwowe połączone poprzecznymi łącznikami.',
        ],
      },
      {
        naglowek: 'Odżywianie się — od drapieżnika do pasożyta',
        diagramId: 'd-t206-plazince-wyplawek',
        akapity: [
          'Wypławki (turbellaria, np. wypławek biały) to płazińce wolno żyjące, spotykane w czystych wodach słodkich. Są drapieżnikami i padlinożercami — pokarm pobierają za pomocą wysuwanej gardzieli, a trawienie odbywa się w rozgałęzionym, ślepo zakończonym jelicie (brak odbytu — niestrawione resztki są wydalane przez otwór gębowy).',
          'Przywry i tasiemce to płazińce pasożytnicze. Tasiemce (np. tasiemiec uzbrojony, tasiemiec nieuzbrojony) pasożytują w jelicie cienkim żywiciela ostatecznego i w ogóle nie mają przewodu pokarmowego — pokarm już strawiony przez żywiciela wchłaniają całą powierzchnią ciała, która jest pokryta oskórkiem odpornym na działanie enzymów trawiennych gospodarza.',
          'Do przytwierdzania się do ściany jelita żywiciela tasiemce wykorzystują przyssawki, a niektóre gatunki (np. tasiemiec uzbrojony) dodatkowo haczyki umieszczone na głowie (skoleksie).',
        ],
      },
      {
        naglowek: 'Rozmnażanie i cykl rozwojowy pasożytów',
        akapity: [
          'Większość płazińców to obojnaki (hermafrodyty) — jeden osobnik ma zarówno męski, jak i żeński układ rozrodczy. Ciało tasiemca zbudowane jest z licznych, powtarzalnych człon(k)ów zwanych proglotydami; każdy proglotyd zawiera własny komplet narządów rozrodczych. Najstarsze, dojrzałe proglotydy (wypełnione tysiącami jaj) odrywają się od tylnego końca ciała i są wydalane z kałem żywiciela.',
          'Rozwój tasiemca uzbrojonego i nieuzbrojonego przebiega z udziałem żywiciela pośredniego (odpowiednio: świnia i bydło), w którego mięśniach rozwija się larwalne stadium — wągier (cysticerkus). Człowiek jako żywiciel ostateczny zaraża się, spożywając surowe lub niedogotowane mięso zawierające wągry; w jego jelicie z wągra rozwija się dorosły tasiemiec.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Płazińce', definicja: 'Typ zwierząt bezkręgowych o ciele spłaszczonym grzbietowo-brzusznie, symetrii dwubocznej i braku jamy ciała.' },
      { termin: 'Ciało bezjamowe', definicja: 'Budowa ciała, w której przestrzeń między narządami wewnętrznymi wypełnia miąższ (mezenchyma), a nie jama ciała.' },
      { termin: 'Wypławek', definicja: 'Płaziniec wolno żyjący w wodach słodkich, drapieżnik lub padlinożerca, posiadający gardziel i oczka.' },
      { termin: 'Skoleks (główka)', definicja: 'Przedni odcinek ciała tasiemca, zaopatrzony w przyssawki (i czasem haczyki), służący do przyczepiania się do ściany jelita żywiciela.' },
      { termin: 'Proglotyd (człon)', definicja: 'Powtarzalny segment ciała tasiemca zawierający komplet narządów rozrodczych.' },
      { termin: 'Wągier (cysticerkus)', definicja: 'Larwalne, pęcherzykowate stadium rozwojowe tasiemca, rozwijające się w mięśniach żywiciela pośredniego.' },
      { termin: 'Żywiciel pośredni', definicja: 'Organizm, w którym rozwija się stadium larwalne pasożyta (np. świnia dla tasiemca uzbrojonego).' },
      { termin: 'Żywiciel ostateczny', definicja: 'Organizm, w którym pasożyt osiąga dojrzałość płciową i się rozmnaża (dla tasiemców — człowiek).' },
    ],
    zapamietajRoznice: [
      {
        a: 'Wypławek',
        b: 'Tasiemiec',
        roznica:
          'Wypławek jest płazińcem wolno żyjącym, ma gardziel, jelito i narządy zmysłów (oczka), a pokarm trawi w przewodzie pokarmowym. Tasiemiec jest pasożytem wewnętrznym, nie ma przewodu pokarmowego ani narządów zmysłów, a strawiony pokarm żywiciela wchłania całą powierzchnią ciała; do przyczepiania się w jelicie służą mu przyssawki (i czasem haczyki).',
      },
    ],
    uwazajNa: [
      'Zarażenie tasiemcem uzbrojonym lub nieuzbrojonym u człowieka następuje przez spożycie surowego lub niedogotowanego mięsa (odpowiednio wieprzowego lub wołowego) zawierającego wągry — nie przez kontakt z chorym człowiekiem.',
      'Tasiemiec nie ma przewodu pokarmowego — to częsty błąd w odpowiedziach dotyczących odżywiania się pasożytów. Pokarm wchłania całą powierzchnią ciała.',
    ],
    musiszWiedziec: [
      'Tasiemiec nie ma przewodu pokarmowego — pokarm strawiony przez żywiciela wchłania całą powierzchnią ciała pokrytą oskórkiem odpornym na trawienie.',
      'Ciało tasiemca zbudowane jest z proglotydów; dojrzałe (najstarsze) proglotydy z jajami odrywają się i są wydalane z kałem.',
    ],
    diagramy: ['d-t206-plazince-tasiemiec', 'd-t206-plazince-wyplawek'],
    pytaniaKontrolne: ['p-t206-plazince-01', 'p-t206-plazince-03'],
  });
})();
