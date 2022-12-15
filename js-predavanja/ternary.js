/* // Kraci if

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
*/

let uvjet = true;

if (uvjet) {
  console.log("Istina");
} else {
  console.log("Laz");
}

// Kriv pristup jer izvrsavamo naredbu

uvjet ? console.log("Istina") : console.log("Laz");

// Ispravan pristup

//const response = uvjet ? "Istina" : "Laz";

console.log(response);

// Nikad ne gnjezdit ternarne izraze
const num = 5;
const response = uvjet ? (num > 5 ? "Veci od 5" : "Manji od 5") : "Laz";

// Nikad ne koristit ternarni u if-u
if (uvjet ? true : false) {
}

const res1 = uvjet || "Nesto";
const res2 = uvjet && "Nesto";

//Pristup s if-om
//Void funkcija returna undefined
function isFruit(fruit) {
  if (
    fruit === "jabuka" ||
    fruit === "naranca" ||
    fruit === "banana" ||
    fruit === "kruska" ||
    fruit === "jagoda"
  ) {
    return true;
  }
  /* else {
    return false
  } */
}

//Pristup sa switch-om
function isFruit(fruit) {
  switch (fruit) {
    case "jabuka":
    case "naranca":
    case "banana":
    case "kruska":
    case "jagoda":
      return true;
    default:
      false;
  }
}

//Pristup s value-om
function isFruit(fruit) {
  const filter = ["jabuka", "naranca", "banana", "kruska", "jagoda"];

  return filter.includes(fruit);
}
