(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t204-nagonasienne-01',
    tematId: 't204-nagonasienne',
    kolejnosc: 1,
    tytul: 'Rośliny nagonasienne',
    wprowadzenie:
      'Rośliny nagonasienne, obok okrytonasiennych, należą do roślin nasiennych — rozmnażają się za pomocą nasion, a nie zarodników, dzięki czemu ich rozmnażanie płciowe jest niezależne od obecności wody w środowisku zewnętrznym. Do nagonasiennych należą przede wszystkim drzewa i krzewy iglaste (szpilkowe), np. sosna, świerk, jodła, modrzew i cis.',
    sekcje: [
      {
        naglowek: 'Budowa i przystosowania nagonasiennych',
        akapity: [
          'Liście nagonasiennych są zwykle zredukowane do wąskich igieł lub drobnych łusek, pokrytych grubą warstwą kutykuli, co znacznie ogranicza parowanie wody. Dzięki temu rośliny te dobrze znoszą suszę fizjologiczną zimą oraz trudne warunki na ubogich glebach.',
          'Większość gatunków to rośliny zimozielone — igły utrzymują się na drzewie przez kilka lat i nie są zrzucane jesienią (wyjątkiem jest np. modrzew, który zrzuca igły na zimę).',
          'Nagonasienne mają dobrze rozwinięte, drewniejące pędy oraz silnie rozwinięty system tkanek przewodzących, co pozwala im osiągać duże rozmiary i tworzyć rozległe lasy iglaste.',
        ],
      },
      {
        naglowek: 'Szyszki i zapylenie',
        diagramId: 'd-t204-nagonasienne-szyszki',
        akapity: [
          'Nagonasienne są roślinami jednopiennymi — na tym samym drzewie wytwarzają zarówno drobne szyszki męskie, jak i większe szyszki żeńskie.',
          'Szyszki męskie produkują ogromne ilości lekkiego pyłku, przenoszonego przez wiatr (zapylenie anemogamiczne) na szyszki żeńskie. Rośliny te nie potrzebują do zapylenia ani owadów, ani wody.',
          'Szyszka żeńska zbudowana jest z licznych łusek ułożonych spiralnie wokół osi. Na powierzchni każdej łuski leżą nieosłonięte (gołe) zalążki — nie są one ukryte wewnątrz żadnej dodatkowej osłony.',
        ],
      },
      {
        naglowek: 'Powstawanie nasion — dlaczego „nagonasienne”',
        akapity: [
          'Po zapyleniu i zapłodnieniu z zalążka rozwija się nasiono, które nadal pozostaje odsłonięte, leżąc bezpośrednio na powierzchni łuski szyszki — stąd nazwa rośliny nagonasienne (nasiono „nagie”, nieosłonięte owocem).',
          'Dojrzałe nasiona (u wielu gatunków zaopatrzone w błoniaste skrzydełko) wypadają spomiędzy rozchylających się łusek dojrzałej, zdrewniałej szyszki i są roznoszone przez wiatr, co umożliwia zasiedlanie nowych terenów.',
        ],
      },
      {
        naglowek: 'Znaczenie nagonasiennych',
        akapity: [
          'Lasy iglaste dostarczają cennego drewna wykorzystywanego w budownictwie, meblarstwie i produkcji papieru, a także żywicy, z której otrzymuje się m.in. terpentynę.',
          'Rozległe bory iglaste stanowią ważne siedlisko dla wielu gatunków zwierząt i pełnią istotną rolę w ochronie gleby przed erozją oraz w produkcji tlenu.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Szyszka męska', definicja: 'Drobna struktura wytwarzająca ziarna pyłku, roznoszone przez wiatr.' },
      { termin: 'Szyszka żeńska', definicja: 'Struktura zbudowana z łusek ułożonych spiralnie, na których leżą nieosłonięte zalążki, a później nasiona.' },
      { termin: 'Zalążek', definicja: 'Struktura, z której po zapłodnieniu rozwija się nasiono.' },
      { termin: 'Nasiono nieosłonięte (nagie)', definicja: 'Nasiono leżące odsłonięte na powierzchni łuski szyszki, niechronione dodatkową osłoną w postaci owocu.' },
      { termin: 'Zapylenie anemogamiczne', definicja: 'Przenoszenie pyłku za pośrednictwem wiatru.' },
      { termin: 'Igła', definicja: 'Zredukowany, wąski liść nagonasiennych, pokryty grubą kutykulą, ograniczający parowanie wody.' },
      { termin: 'Roślina zimozielona', definicja: 'Roślina, która nie zrzuca wszystkich liści (igieł) na zimę.' },
      { termin: 'Roślina jednopienna', definicja: 'Roślina wytwarzająca oba rodzaje organów płciowych (tu: szyszki męskie i żeńskie) na tym samym osobniku.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Rośliny nagonasienne',
        b: 'Rośliny okrytonasienne',
        roznica: 'Nasiona nagonasiennych są nieosłonięte i leżą odsłonięte na łuskach szyszki, a rośliny te nie wytwarzają kwiatów ani owoców. Nasiona okrytonasiennych są ukryte wewnątrz owocu, który powstaje z zalążni kwiatu.',
      },
    ],
    uwazajNa: [
      'Szyszka nie jest owocem — to zdrewniały organ zbudowany z łusek, na których leżą odsłonięte nasiona, a nie struktura powstała z zalążni kwiatu.',
    ],
    musiszWiedziec: [
      'Cecha decydująca o nazwie „nagonasienne” to nieosłonięte, „nagie” nasiono, leżące bezpośrednio na łusce szyszki — rośliny te nie wytwarzają ani kwiatów, ani owoców.',
      'Zapylenie u nagonasiennych odbywa się głównie za pośrednictwem wiatru, a nie owadów, i nie wymaga obecności wody.',
    ],
    diagramy: ['d-t204-nagonasienne-szyszki'],
    pytaniaKontrolne: ['p-t204-nagonasienne-01', 'p-t204-nagonasienne-10'],
  });
})();
