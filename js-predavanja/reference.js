/* 
const obj1 = new Object();

obj1.prop1 = "first";
obj1.prop2 = "second";
 */
/* 
const obj = {
  prop1: "first",
  prop2: "second",
};

console.log(obj);

obj.prop1 = "Hello world!";
 */
/* obj = {
  prop1: "Hello world!",
  prop2: "second",
}; */

//console.log(obj);

// Za primitivne vrijednosti
// imeMemorijskeLokacije = 100
// #A24B = 100

// Za objekte
// imeMemorijskeLokacije = {a:100}
// Referenca pokazuje na neku drugu memorijsku lokaciju, nama nepoznatu
// #A24B = #B452
// #B452 = {a:100}

// Dva razlicita objekta. Dvije iste vrijednosti, ali dvije razlicite reference
/* 
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1, obj2);
console.log(obj1 === obj2);
console.log(obj1.a === obj2.a); 
*/

debugger;
// Pass by reference kad su objekti u pitanju
// Pas by value kad su primitivi u pitanju
function modify(obj) {
  // 3. Stavljam daljinski u kutiju imena obj
  // 4. Koristim daljinski da promjenim vrijednost objekta
  obj.a = "Modified";
  // 5. Zavrsam izvrsavanje modify funkcije

  // Vadim daljinski iz kutije i stavljam 'Modified' u kutiju
  // obj = 'Modified';
}

// 1. Stavljam daljinski u kutiju imena test
const test = { a: 1 };

console.log(test);

// 2. Otvaram kutiju i saljem daljinski iz te kutije u funkciju modify
modify(test);

// 6. Vrijednost se promjenila
console.log(test);

// Primitivni tipovi podataka u varijablu spremaju vrijednost
// Objekti U varijablu spremaju referencu (daljinski za upravljanje objektom)
