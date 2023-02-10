// Stanja promise objekta: pending, fulfilled i rejected
// Fetch vraca promise koji wrappa Response objekt
// Promise ima metodu then koja unwrappa promise

function promiseRequest() {
  const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

  // Pending -> Fulfilled  - poziva se then metoda
  // Pending -> Rejected  -  poziva se catch metoda

  console.log({ promise });

  promise
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
/* 
// Catch sprijecava sa se program ugasi ukoliko promise throwa error
setInterval(() => console.log("Tick tock..."), 1000);

// Sinkrona linija izvrsava se odma
console.log("END PROGRAM"); 
*/

/* 
console.log("Sync", promise);

setTimeout(() => {
  console.log("Timeout", promise);
}, 1000);
 */

// Async await nacin pisanja koda
// VAZNO! Funkcija tipa async sve sto returna wrappa u promise

async function request() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    console.log(data);

    console.log(
      `User ${data.userId} ${
        data.completed ? "has" : "hasnt"
      } completed his task`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}

request();
