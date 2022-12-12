/* 
var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
*/

/* // Isto kao:

for (var i = 0; i < 10; i++) {
  console.log(i);
}
 */

/* 
// Ispisi sve brojeve u stringu

var myString = "0test123test321";

for (i = 0; i < myString.length; i++) {
  if (!isNaN(+myString[i])) {
    console.log(myString[i]);
  }
}
 */
/* 
// Pronadi najveci clan niza, a ako naides na ABORT zavrsi izvrsavanje
// Ako naides na CONTINUE preskoci i nastavi

var myNumbers = [4, 2, 7, "CONTINUE", 6, 2, "ABORT", 8, 6, 10, 2, 5, 0, 2];
var max = myNumbers[0];

for (var i = 1; i < myNumbers.length; i++) {
  var current = myNumbers[i];

  if (current === "ABORT") {
    break;
  }

  if (current === "CONTINUE") {
    continue;
  }

  if (current > max) {
    max = current;
  }
}

console.log(max);
 */

// Ispisi mi string u obrnutom smjeru

var myString = "Hello world";
var reverseString = "";

for (var i = myString.length - 1; i >= 0; i--) {
  var char = myString[i];

  //reverseString = `${reverseString}${char}`;
  //reverseString += char;
  reverseString = reverseString.concat(char);
}

console.log(reverseString);
