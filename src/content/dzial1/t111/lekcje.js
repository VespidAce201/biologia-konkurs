(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t111-01',
    tematId: 't111',
    kolejnosc: 1,
    tytul: 'Metabolizm i enzymy',
    wprowadzenie:
      'W każdej komórce nieustannie zachodzą tysiące reakcji chemicznych, dzięki którym organizm zdobywa energię, buduje własne struktury i usuwa zbędne produkty przemiany materii. Ogół tych reakcji nazywamy metabolizmem, a kluczową rolę w ich przebiegu odgrywają enzymy.',
    sekcje: [
      {
        naglowek: 'Metabolizm — przemiana materii i energii',
        akapity: [
          'Metabolizm to ogół reakcji chemicznych zachodzących w komórkach organizmu, obejmujący zarówno budowanie, jak i rozkładanie związków chemicznych. Wyróżniamy w nim dwa uzupełniające się rodzaje przemian.',
          'Anabolizm to reakcje syntezy (budowania) złożonych związków organicznych z prostszych, czemu towarzyszy pochłanianie energii — przykładem jest fotosynteza, w której z dwutlenku węgla i wody powstaje glukoza.',
          'Katabolizm to reakcje rozkładu złożonych związków organicznych na prostsze, czemu towarzyszy uwalnianie energii — przykładem jest oddychanie komórkowe, w którym rozkładana jest glukoza.',
          'Uwolniona w katabolizmie energia jest magazynowana głównie w cząsteczkach ATP (uniwersalnego nośnika energii w komórce) i wykorzystywana m.in. do reakcji anabolicznych, ruchu czy transportu substancji.',
        ],
      },
      {
        naglowek: 'Enzymy — biologiczne katalizatory',
        diagramId: 'd-t111-model-klucz-zamek',
        akapity: [
          'Enzymy to białka przyspieszające przebieg reakcji chemicznych w komórce, same się przy tym nie zużywając — po zakończeniu reakcji enzym uwalnia się w niezmienionej postaci i może katalizować kolejne cząsteczki substratu.',
          'Substancja, na którą działa enzym, nazywana jest substratem, a substancja powstająca w wyniku reakcji — produktem. Enzym łączy się z substratem w miejscu (centrum) aktywnym, którego kształt jest dopasowany do kształtu substratu — porównuje się to do dopasowania klucza do zamka.',
          'Każdy enzym jest zwykle specyficzny wobec jednego rodzaju substratu lub wąskiej grupy podobnych substancji — dzięki temu procesy metaboliczne w komórce przebiegają w sposób uporządkowany i kontrolowany.',
          'Enzymy obniżają energię aktywacji reakcji, czyli ilość energii potrzebną do jej rozpoczęcia, dzięki czemu reakcje, które bez enzymu zachodziłyby bardzo wolno, w komórce przebiegają wystarczająco szybko.',
        ],
      },
      {
        naglowek: 'Czynniki wpływające na działanie enzymów',
        akapity: [
          'Temperatura silnie wpływa na aktywność enzymów — każdy enzym ma temperaturę optymalną, w której działa najskuteczniej (u enzymów ludzkich jest to zwykle około 37°C). Zbyt niska temperatura spowalnia reakcję, a zbyt wysoka prowadzi do denaturacji, czyli trwałego zniszczenia struktury białka i utraty aktywności enzymu.',
          'Odczyn środowiska (pH) także ma swoje optimum, właściwe dla danego enzymu — na przykład enzymy trawienne działające w żołądku najlepiej pracują w silnie kwaśnym środowisku, a enzymy jelitowe w środowisku lekko zasadowym.',
          'Wzrost stężenia substratu zwykle przyspiesza reakcję enzymatyczną, jednak tylko do pewnego momentu — gdy wszystkie cząsteczki enzymu są już zajęte przekształcaniem substratu, dalsze zwiększanie jego ilości nie przyspiesza już reakcji.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Metabolizm', definicja: 'Ogół reakcji chemicznych zachodzących w komórkach organizmu, obejmujący anabolizm i katabolizm.' },
      { termin: 'Anabolizm', definicja: 'Reakcje syntezy złożonych związków organicznych z prostszych, przebiegające z pochłanianiem energii.' },
      { termin: 'Katabolizm', definicja: 'Reakcje rozkładu złożonych związków organicznych na prostsze, przebiegające z uwalnianiem energii.' },
      { termin: 'Enzym', definicja: 'Białko przyspieszające (katalizujące) przebieg reakcji chemicznej w komórce, niezużywające się w trakcie reakcji.' },
      { termin: 'Substrat', definicja: 'Substancja, na którą działa enzym w reakcji chemicznej.' },
      { termin: 'Produkt', definicja: 'Substancja powstająca w wyniku reakcji chemicznej katalizowanej przez enzym.' },
      { termin: 'Miejsce (centrum) aktywne', definicja: 'Fragment cząsteczki enzymu, do którego dopasowuje się kształtem cząsteczka substratu.' },
      { termin: 'Denaturacja', definicja: 'Trwałe zniszczenie struktury białka, np. enzymu, powodujące utratę jego aktywności; może być wywołane m.in. wysoką temperaturą.' },
      { termin: 'ATP', definicja: 'Uniwersalny nośnik energii w komórce, magazynujący energię uwalnianą w reakcjach katabolicznych.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Anabolizm',
        b: 'Katabolizm',
        roznica: 'Anabolizm buduje złożone związki z prostszych i pochłania energię (np. fotosynteza). Katabolizm rozkłada złożone związki na prostsze i uwalnia energię (np. oddychanie komórkowe). Oba procesy razem tworzą metabolizm komórki.',
      },
    ],
    uwazajNa: [
      'Enzym nie zużywa się w trakcie reakcji — po jej zakończeniu odłącza się od produktu w niezmienionej postaci i może wielokrotnie katalizować kolejne reakcje tego samego typu.',
      'Wyższa temperatura nie zawsze przyspiesza działanie enzymu. Do temperatury optymalnej reakcja rzeczywiście przebiega szybciej, ale powyżej niej dochodzi do denaturacji białka enzymatycznego i gwałtownego spadku, a nawet zaniku aktywności.',
    ],
    musiszWiedziec: [
      'Enzymy są białkami — dlatego ich działanie zależy od temperatury i pH, a ekstremalne warunki mogą je trwale zdenaturować.',
      'Każdy enzym ma swój optymalny zakres temperatury i pH, w którym działa najskuteczniej.',
    ],
    diagramy: ['d-t111-model-klucz-zamek'],
    pytaniaKontrolne: ['p-t111-01', 'p-t111-03'],
  });
})();
