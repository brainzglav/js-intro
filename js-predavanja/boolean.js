/* 
var myFirstBool = true;
var mySecondBool = false;

console.log(String(myFirstBool), mySecondBool);
console.log(typeof String(myFirstBool), typeof mySecondBool);
console.log(+myFirstBool, +mySecondBool);

if (mySecondBool) {
  console.log("Hello world!");
} 
*/

/* 
// I | AND
console.log(0 && 0, 0 && 1, 1 && 0, 1 && 1);
console.log(1 && 1 && 1 && 1 && 0);
// ILI | OR
console.log(0 || 0, 0 || 1, 1 || 0, 1 || 1);
console.log(1 || 0 || 0 || 0 || 0);
console.log(!0, !1);
// !!0 krace od Boolean(0) - shorthand
console.log(!!0, !!1);
 */

var isLoading = true;
var isLoaded = true;

// imenovanje boolean is ili has

var hasAmount = true;

//isLoading = false;

var hasVideo = true;

/* 
if (hasVideo && !isLoading) {
  console.log("Prikazi video");
} else if (hasVideo) {
  console.log("Loading...");
} else {
  console.log("Nema videa");
}
 */

/* 
console.log("test" == "teste");
console.log(1 == 2);
console.log(true == false); 
*/
/* 
console.log("100" == 100);
console.log("100" === 100);
console.log(1 < 2);
console.log(3 <= 2);
console.log(3 >= 2);
 */
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!-1);
console.log(!!-Infinity);
console.log(!!undefined);
console.log(!!null);
console.log(!!"");

var video = null;

//Falsy vrijednosti : 0,  NaN, false, undefined, null, '' | manje bitne - 0n, -0, document.all

console.log(typeof null);

// Ne radit!  if (isLoading === true) {
// Ispravno
if (isLoading) {
  console.log("Istina");
} else {
  console.log("Laz");
}

//Primitivni tipovi podataka: number, string, boolean, undefined, null, bigint, symbol
