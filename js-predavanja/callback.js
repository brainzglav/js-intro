const callback = (event) => console.log(event);
const button = document.getElementById("my-button");

/* addEventListener je HOF - Higher order function
 Higher order function je funkcija koja izvrsava neku drugu funkciju koja je proslijedena kao parametar 
 Callback je funkcija koju proslijedujemo kao parametar nekoj drugoj funkciji (HOF)
 Pokretanje HOF izvrsava callback funckiju. Zelimo da callback bude pure function, odnosno da nema side-effecata
 */

button.addEventListener("click", callback);

let someGlobalVar = "Can produce side effect";

const possibleSideEffect = () => console.log(someGlobalVar);
const pureFunction = (value) => console.log(value);
