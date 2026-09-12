(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t204-okrytonasienne-01',
    tematId: 't204-okrytonasienne',
    kolejnosc: 1,
    tytul: 'Rośliny okrytonasienne',
    wprowadzenie:
      'Rośliny okrytonasienne (rośliny kwiatowe) to najliczniejsza i najbardziej zróżnicowana grupa roślin lądowych. Ich charakterystycznym organem rozmnażania płciowego jest kwiat, a nasiona — w przeciwieństwie do roślin nagonasiennych — są ukryte (osłonięte) wewnątrz owocu.',
    sekcje: [
      {
        naglowek: 'Budowa kwiatu',
        diagramId: 'd-t204-okrytonasienne-kwiat',
        akapity: [
          'Kwiat jest organem rozmnażania płciowego roślin okrytonasiennych. Jego zewnętrzną część stanowi zwykle okwiat, złożony z kielicha (działek kielicha, zwykle zielonych) i korony (barwnych płatków), które chronią wnętrze kwiatu, a barwna korona dodatkowo przyciąga zapylaczy.',
          'Męskim organem płciowym kwiatu jest pręcik, złożony z nitki i pylnika, w którym powstają ziarna pyłku.',
          'Żeńskim organem płciowym jest słupek, zbudowany ze znamienia (przyjmującego pyłek), szyjki oraz zalążni, wewnątrz której znajdują się zalążki.',
        ],
      },
      {
        naglowek: 'Zapylenie i zapłodnienie',
        akapity: [
          'Zapylenie to przeniesienie ziaren pyłku z pręcika na znamię słupka. U wielu roślin okrytonasiennych zapylenie odbywa się za pośrednictwem owadów (entomogamia) — takie kwiaty są zwykle barwne, pachnące i wytwarzają nektar. Inne gatunki są zapylane przez wiatr (anemogamia) — ich kwiaty są zwykle niepozorne, bez płatków i nektaru.',
          'Po dotarciu ziarna pyłku na znamię wykształca się łagiewka pyłkowa, którą komórki plemnikowe przemieszczają się w głąb słupka aż do zalążni, gdzie dochodzi do zapłodnienia zalążka.',
        ],
      },
      {
        naglowek: 'Powstawanie owocu i nasion',
        akapity: [
          'Po zapłodnieniu zalążek przekształca się w nasiono, a ściana zalążni rozrasta się i przekształca w owoc, który otacza i chroni znajdujące się w nim nasiona — to właśnie ta cecha decyduje o nazwie rośliny okrytonasienne.',
          'Owoce ułatwiają rozsiewanie nasion: owoce mięsiste (np. jabłko, wiśnia) są zjadane przez zwierzęta, które rozsiewają niestrawione nasiona, a owoce suche wykształcają np. skrzydełka (klon) czy haczyki (np. rzep, łopian), ułatwiające przenoszenie przez wiatr lub zwierzęta.',
        ],
      },
      {
        naglowek: 'Różnorodność i znaczenie okrytonasiennych',
        akapity: [
          'Wśród okrytonasiennych wyróżnia się rośliny jednoliścienne (np. zboża, trawy, cebula, tulipan — zwykle o wąskich liściach z unerwieniem równoległym) i dwuliścienne (np. dąb, jabłoń, groch, fasola — zwykle o liściach z unerwieniem siatkowatym).',
          'Okrytonasienne są podstawą wyżywienia ludzi i zwierząt — dostarczają zbóż, warzyw, owoców, a także pasz, surowców włókienniczych i wielu leków.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Kwiat', definicja: 'Organ rozmnażania płciowego rośliny okrytonasiennej.' },
      { termin: 'Kielich', definicja: 'Zewnętrzny okółek kwiatu, złożony zwykle z zielonych działek kielicha, chroniący pąk kwiatowy.' },
      { termin: 'Korona', definicja: 'Okółek barwnych płatków kwiatu, u wielu gatunków przyciągający zapylaczy.' },
      { termin: 'Pręcik', definicja: 'Męski organ płciowy kwiatu, złożony z nitki i pylnika, wytwarzający pyłek.' },
      { termin: 'Słupek', definicja: 'Żeński organ płciowy kwiatu, złożony ze znamienia, szyjki i zalążni.' },
      { termin: 'Zalążnia', definicja: 'Dolna, rozszerzona część słupka, zawierająca zalążki; po zapłodnieniu rozwija się w owoc.' },
      { termin: 'Zapylenie', definicja: 'Przeniesienie ziaren pyłku z pręcika na znamię słupka.' },
      { termin: 'Owoc', definicja: 'Struktura powstająca z zalążni po zapłodnieniu, otaczająca i chroniąca nasiona oraz ułatwiająca ich rozsiewanie.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Rośliny okrytonasienne',
        b: 'Rośliny nagonasienne',
        roznica: 'Okrytonasienne wytwarzają kwiaty, a ich nasiona są ukryte wewnątrz owocu powstałego z zalążni po zapłodnieniu. Nagonasienne nie wytwarzają kwiatów ani owoców, a ich nasiona leżą odsłonięte na łuskach szyszki.',
      },
    ],
    uwazajNa: [
      'Nie każdy owoc jest soczysty i słodki — w sensie biologicznym owocem jest każda struktura powstała z zalążni po zapłodnieniu, otaczająca nasiona, np. również orzech czy strąk grochu.',
    ],
    musiszWiedziec: [
      'Cecha decydująca o nazwie „okrytonasienne” to nasiono ukryte (osłonięte) wewnątrz owocu, który powstaje z zalążni słupka po zapłodnieniu.',
      'Kwiat to organ rozmnażania płciowego zbudowany z okwiatu (kielich i korona), pręcików (organ męski) i słupka (organ żeński).',
    ],
    diagramy: ['d-t204-okrytonasienne-kwiat'],
    pytaniaKontrolne: ['p-t204-okrytonasienne-01', 'p-t204-okrytonasienne-10'],
  });
})();
