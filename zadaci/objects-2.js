/* 
Napisi funckiju imena pow koja prima objekt s property-ima value i exponent.
Funkcija zatim uz pomoc for petlje racuna eksponencijalnu vrijednost value-a
i vraca je kao rezultat.
Funkcija mora zadovoljavat sljedece:
a) Ukoliko exponent nije odreden on ce biti postavljen u vrijednost 2
b) Ukoliko je exponent 0 rezultat je 1
c) Ukoliko je exponent negativan rezultat je 1 / (value ^ exponent)

Napomena: Zabranjeno je koristiti Math.pow ! 
*/

function pow({ value, exponent = 2 }) {
  if (exponent === 0) {
    return 1;
  }

  let res = value;

  for (let i = 1; i < Math.abs(exponent); i++) {
    res *= value;
  }

  return exponent < 0 ? 1 / res : res;
}

console.log(
  pow({ value: 2, exponent: 4 }),
  pow({ value: 2 }),
  pow({ value: 2, exponent: 0 }),
  pow({ value: 2, exponent: -4 })
);
