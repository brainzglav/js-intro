/* 
Napisi dvije funkcije koje ce racunati povrsinu i opseg pravokutnika. Pravokutnik neka bude predstavljen uz pomoc objekta. 
Zatim napisi funkciju ukupniProstor koja prima niz objekata tipa pravokutnik i vraca objekt koji sadrzi ukupnu povrsinu
i ukupni opseg tih pravokutnika. U trecoj funkciji iskoristi dvije prethodno napisane funkcije.
*/

// Ovo je pure function. Pure function ne ovisi o nicemu van te funkcije, odnosno za isti
// input uvijek daje isti output.
function opseg({ x, y }) {
  return 2 * (x + y);
}

function povrsina({ x, y }) {
  return x * y;
}

function ukupniProstor(arr) {
  let ukupniOpseg = 0;
  let ukupnaPovrsina = 0;

  for (let i = 0; i < arr.length; i++) {
    ukupniOpseg += opseg(arr[i]);
    ukupnaPovrsina += povrsina(arr[i]);
  }

  return { ukupniOpseg, ukupnaPovrsina };
}

const pravokutnik = { x: 3, y: 5 };
const geometrijskiOblici = [
  pravokutnik,
  { x: 2, y: 2 },
  { x: 1, y: 5 },
  { x: 3, y: 2 },
];

console.log(opseg({ x: 1, y: 1 }));
console.log(opseg(pravokutnik));
console.log(povrsina({ x: 1, y: 1 }));
console.log(povrsina(pravokutnik));
console.log(ukupniProstor(geometrijskiOblici));
