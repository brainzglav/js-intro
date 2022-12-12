// U slucaju da je nas execution env browser js engine
//console.log(document);
// U slucaju da je nas execution env node.js
//console.log(process);

function onClick() {
  myFirstDiv.textContent = "Changed via JS";
  myFirstDiv.className = "color";
}

function doSomething() {
  console.log("Dragged");
}

const myFirstDiv = document.getElementById("my-first-div");
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", onClick);

// onclick je event listener

/* 
function getValue() {
  console.log("Do something");

  return "Value";
}

console.log(getValue);
console.log(getValue());
 */
