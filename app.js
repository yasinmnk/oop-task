class Nokta {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}


class Ucgen {
  constructor(nok1, nok2, nok3) {
    this.nok1 = nok1;
    this.nok2 = nok2;
    this.nok3 = nok3;
  }

  cevreHesaplama = function () {
    const kenar1 = Math.sqrt(Math.pow(2, a2 - a1) + Math.pow(2, b2 - b1));
    const kenar2 = Math.sqrt(Math.pow(2, a3 - a1) + Math.pow(2, b3 - b1));
    const kenar3 = Math.sqrt(Math.pow(2, a3 - a2) + Math.pow(2, b3 - b2));

    const cevre = kenar1 + kenar2 + kenar3;
    return cevre;
  };

  alanHesaplama = function () {
    const alan =
      (1 / 2) * (a1 * b2 + a2 * b3 + a3 * b1 - (b1 * a2 + b2 * a3 + b3 * a1));
    return alan;
  };
}

const nokta1 = new Nokta(3, 3);
const nokta2 = new Nokta(10, 5);
const nokta3 = new Nokta(15, 15);
const a1 = nokta1.a;
const b1 = nokta1.b;
const a2 = nokta2.a;
const b2 = nokta2.b;
const a3 = nokta3.a;
const b3 = nokta3.b;

const ucgen = new Ucgen(nokta1, nokta2, nokta3);

console.log(" Çevre = " + ucgen.cevreHesaplama());
console.log(" Alan= " + ucgen.alanHesaplama());
