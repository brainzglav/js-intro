/* Proslijedi artikl iz trgovine da program procijeni sto je taj artikl */

// Ukoliko imamo falsy vrijednost uzmi drugi parametar
var article = process.argv[2] || "banana";

// *Ko zeli znat vise*
//var article = process.argv[2] || !"banana" || "jagoda" || "pivo";

var andTest1 = true && "Test";
var andTest2 = false && "Test";

console.log(andTest1, andTest2);

/* 
if (article === "banana" || article === "naranca" || article === "jagoda") {
  console.log("Voce!");
} else if (
  article === "bosiljak" ||
  article === "ruzmarin" ||
  article === "papar"
) {
  console.log("Zacin!");
} else if (article === "pivo" || article === "vino" || article === "kola") {
  console.log("Pice!");
} else {
  console.log("Ne znam o cemu se radi!");
}
*/

switch (article) {
  case "banana":
  case "naranca":
  case "jagoda":
    console.log("Voce!");
    break;
  case "bosiljak":
  case "ruzmarin":
  case "papar":
    console.log("Zacin!");
    break;
  case "pivo":
  case "vino":
  case "kola":
    console.log("Pice!");
    break;
  default:
    console.log("Ne znam o cemu se radi!");
}
