// Kraci if

var uvjet = +process.argv[2];

console.log(uvjet);

var ternary = uvjet ? "istina" : "laz";

console.log(!!"0", !!0);

if (uvjet) {
  console.log("istina");
} else {
  console.log("laz");
}

console.log(ternary);
