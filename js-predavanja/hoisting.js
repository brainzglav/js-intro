/* Pri deklaraciji varijable rezerviraj memorijsku lokaciju i dodijeli joj ime i vrijednost undefined 
   Hoisting je princip po kojem deklaracije varijabli i funkcija isplivaju na vrh (prve se ucitaju u memoriju) */

//console.log(test);
/* 
console.log(hoist);

var hoist = "Hoist";
 */

// Sve sto se nalazi izmedu viticastih zagrada for, while, if i switch se naziva block scope

// How we see it:
/* 
console.log("First", hoist);

if (true) {
  var hoist = "Hoist";

  console.log("Second", hoist);
}

console.log("Third", hoist);
 */

// How JS engine sees it:

/* 
var hoist;

if(true) {
    hoist = "Hoist";
}
*/

// Izbacit ce error zato sto let nece isplivat van block scopea

/* 
console.log("First", hoist);

if (true) {
  let hoist = "Hoist";

  console.log("Second", hoist);
}

console.log("Third", hoist);
 */

/* 
for (let i = 0; i < 10; i++) {
  console.log("Iterating...", i);

  var file = "File od 1GB";
}

console.log("Done", i);

while (i < 10) {
  console.log("Iterating...", i);
}
 */

// const mozemo samo inicijalno napraviti assignment

const constHello = "Hello world!";
let letHello = "Hello world!";

// Type error
// constHello = "Hello aliens!";
// Syntax error
// const test

console.log(constHello, letHello);
