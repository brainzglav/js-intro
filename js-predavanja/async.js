// JS je single-threaded jezik
// Parametri: Callback koji moramo izvrsit i vrijeme izvrsavanja u milisekundama

/* 
setTimeout(() => console.log("Hello async 3"), 0);
setTimeout(() => console.log("Hello async 1"), 0);
setTimeout(() => console.log("Hello async 2"), 0);

console.log("Hello sync 3");
console.log("Hello sync 1");
console.log("Hello sync 2");
 */

let i = 0;

const interval = setInterval(() => {
  console.log("Hello");

  if (i === 3) {
    clearInterval(interval);

    return;
  }

  i++;
}, 1000);

//a b c d

//1 thread
//a c

//2 thread
//b d
