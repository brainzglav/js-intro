/*  
  Funkcija se sastoji od: keyworda function, function signature ili imena funkcije,
  funkcijskih parametara i function bodya odnosno tijela funkcije
 */

// Svi parametri koje nismo proslijedili ce biti undefined

function hello(first, second) {
  console.log(`Hello ${first} and ${second}!`);
}

// Function invocation ili pozivanje funkcije

//hello("world", "others");
//hello("world");
//hello("world", "others", "aliens");

/* 
a) Uzmi najveci clan niza i zbroji ga sa 10 
b) Uzmi najveci clan niza i oduzmi mu 5
c) Uzmi najveci clan niza i zbroji ga sa najmanjim
*/

// Funkcija koja nista ne vraca se zove void funkcija

function max(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function test(myVar) {
  console.log("Testing...");
}

const testVar = "Testing...";

function min(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const arr = [1, 5, 4, 7, 6, 9, 0, 10, 2, 7, 6, 4];
const maxNumber = max(arr);
const minNumber = min(arr);

console.log("Najveci clan niza je: ", maxNumber);
console.log("Najmanji clan niza je:", minNumber);
console.log("a)", maxNumber + 10);
console.log("b)", maxNumber - 5);
console.log("c)", maxNumber + minNumber);

/* 
Moj nacin pisanja koda

function max(arr) {
  let max = arr[0];
  let min = arr[0];
  let test = arr[0];

  console.log(max);
  console.log(min);
  console.log(test);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  if (true) {
  }

  return max;
}
*/
