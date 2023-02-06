// Stanja promise objekta: pending, fulfilled i rejected
// Fetch vraca promise koji wrappa Response objekt
// Promise ima metodu then koja unwrappa promise

async function request() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  console.log(data);
}

request();

/* 
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
const responsePromise = promise.then((res) => res.json());

responsePromise.then((res) => {
  console.log(res);
});
 */
/* 
console.log("Sync", promise);

setTimeout(() => {
  console.log("Timeout", promise);
}, 1000);
 */
