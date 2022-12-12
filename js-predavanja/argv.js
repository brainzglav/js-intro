console.log("Argv lesson");

//console.log(process.argv);

//var array = [1, 2, 3, 4, 5, 6];

//console.log(array.slice(1));

// array[0] - 0 je index niza koji dohvacamo
/* 
console.log(array[0], array[1], array[2], array[10], array.length);

var myString = "Hello world!";

console.log(myString[4]);
*/

var params = process.argv.slice(2);

/* 
console.log(params);
console.log(process.argv);
console.log(params[0]);
console.log(process.argv[2]); 
*/

// +nesto je skraceno Number(nesto)
// !!nesto je skraceno Boolean(nesto)
var num = +params[1];

if (isNaN(num)) {
  console.log("Wrong input!");
}

console.log(!!"test2");
