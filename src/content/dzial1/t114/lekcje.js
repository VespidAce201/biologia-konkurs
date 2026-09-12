(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t114-01',
    tematId: 't114',
    kolejnosc: 1,
    tytul: 'Oddychanie komórkowe',
    wprowadzenie:
      'Oddychanie komórkowe to proces uwalniania energii zgromadzonej w związkach organicznych (głównie w glukozie), zachodzący we wszystkich żywych komórkach — roślin, zwierząt, grzybów i innych organizmów — przez całą dobę, niezależnie od dostępu do światła. Uwolniona energia jest niezbędna do wszystkich procesów życiowych: wzrostu, ruchu, produkcji ciepła czy budowy nowych związków.',
    sekcje: [
      {
        naglowek: 'Oddychanie tlenowe',
        diagramId: 'd-t114-schemat-oddychania',
        akapity: [
          'Oddychanie tlenowe jest głównym sposobem uwalniania energii u większości organizmów. Zachodzi głównie w mitochondriach — organellach obecnych w niemal każdej żywej komórce.',
          'Słowne równanie oddychania tlenowego: glukoza + tlen, w obecności mitochondriów, przekształcane są w dwutlenek węgla, wodę i energię. Energia ta jest wykorzystywana bezpośrednio przez komórkę do wykonywania pracy (np. skurczu mięśni, budowy związków, transportu substancji), a część rozprasza się jako ciepło.',
          'Oddychanie tlenowe jest bardzo wydajne energetycznie — z jednej cząsteczki glukozy komórka uzyskuje dużo energii, znacznie więcej niż w procesach beztlenowych.',
          'Substratem oddychania (materiałem zużywanym w tym procesie) jest przede wszystkim glukoza, a produktami — dwutlenek węgla i woda, które komórka usuwa jako zbędne produkty przemiany materii.',
        ],
      },
      {
        naglowek: 'Oddychanie beztlenowe (fermentacja)',
        diagramId: 'd-t114-tlenowe-a-beztlenowe',
        akapity: [
          'Gdy dopływ tlenu do komórek jest niewystarczający albo dany organizm w ogóle nie wykorzystuje tlenu, energia z glukozy może być uwalniana w procesie oddychania beztlenowego, nazywanego również fermentacją. Fermentacja uwalnia znacznie mniej energii z tej samej ilości glukozy niż oddychanie tlenowe.',
          'Fermentacja mleczanowa zachodzi między innymi w komórkach mięśniowych człowieka podczas bardzo intensywnego wysiłku fizycznego, gdy krew nie nadąża dostarczać wystarczającej ilości tlenu do pracujących mięśni. Jej produktem jest kwas mlekowy — jego nagromadzenie w mięśniach powoduje uczucie zmęczenia i pieczenia. Fermentację mleczanową prowadzą też bakterie kwasu mlekowego, wykorzystywane np. przy produkcji jogurtów i kiszonek.',
          'Fermentacja alkoholowa zachodzi u drożdży (grzybów jednokomórkowych) oraz niektórych bakterii. Jej produktami są etanol (alkohol) i dwutlenek węgla. Proces ten wykorzystuje się w piekarstwie (wydzielający się CO2 spulchnia ciasto) oraz w produkcji napojów alkoholowych.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Oddychanie komórkowe', definicja: 'Proces uwalniania energii zgromadzonej w związkach organicznych (np. glukozie), zachodzący we wszystkich żywych komórkach przez całą dobę.' },
      { termin: 'Mitochondrium', definicja: 'Organellum komórkowe, w którym zachodzi oddychanie tlenowe.' },
      { termin: 'Oddychanie tlenowe', definicja: 'Proces rozkładu glukozy z udziałem tlenu, zachodzący w mitochondriach, uwalniający dużo energii oraz dwutlenek węgla i wodę.' },
      { termin: 'Oddychanie beztlenowe (fermentacja)', definicja: 'Proces rozkładu glukozy bez udziału tlenu, uwalniający niewielką ilość energii.' },
      { termin: 'Fermentacja mleczanowa', definicja: 'Rodzaj fermentacji, w którym z glukozy powstaje kwas mlekowy; zachodzi m.in. w mięśniach człowieka podczas intensywnego wysiłku oraz u bakterii kwasu mlekowego.' },
      { termin: 'Fermentacja alkoholowa', definicja: 'Rodzaj fermentacji prowadzonej przez drożdże, w którym z glukozy powstaje etanol i dwutlenek węgla.' },
      { termin: 'Substrat oddechowy', definicja: 'Związek chemiczny (najczęściej glukoza) zużywany podczas oddychania komórkowego jako źródło energii.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Oddychanie tlenowe',
        b: 'Oddychanie beztlenowe (fermentacja)',
        roznica: 'Oddychanie tlenowe wymaga obecności tlenu, zachodzi w mitochondriach i uwalnia dużo energii, a jego produktami są dwutlenek węgla i woda. Oddychanie beztlenowe (fermentacja) zachodzi bez udziału tlenu, uwalnia znacznie mniej energii z tej samej ilości glukozy, a jego produktem jest kwas mlekowy (fermentacja mleczanowa) albo etanol i dwutlenek węgla (fermentacja alkoholowa).',
      },
    ],
    uwazajNa: [
      'Częsty błąd: mylenie „oddychania komórkowego” z „oddychaniem” rozumianym jako wymiana gazowa w płucach (wdech i wydech). To dwa różne, choć powiązane zjawiska — wymiana gazowa w płucach dostarcza do krwi tlen i usuwa z niej dwutlenek węgla, natomiast oddychanie komórkowe to proces chemiczny zachodzący wewnątrz każdej żywej komórki, w którym z udziałem (najczęściej) tego tlenu uwalniana jest energia z pokarmu.',
      'Fermentacja mleczanowa u człowieka zachodzi w mięśniach, a nie fermentacja alkoholowa — tej drugiej organizm człowieka nie przeprowadza. Fermentację alkoholową prowadzą drożdże.',
    ],
    musiszWiedziec: [
      'Słowne równanie oddychania tlenowego: glukoza + tlen → (w mitochondrium) → dwutlenek węgla + woda + energia.',
      'Oddychanie komórkowe zachodzi we wszystkich żywych komórkach przez całą dobę, niezależnie od światła — w przeciwieństwie do fotosyntezy.',
      'Oddychanie beztlenowe (fermentacja) uwalnia znacznie mniej energii niż oddychanie tlenowe.',
    ],
    diagramy: ['d-t114-schemat-oddychania', 'd-t114-tlenowe-a-beztlenowe'],
    pytaniaKontrolne: ['p-t114-01', 'p-t114-06'],
  });
})();
