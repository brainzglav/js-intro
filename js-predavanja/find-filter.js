/* 
function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
 */

function findWaldo(arr) {
  /* const findCallback = (item, index) => {
    console.log({ item, index });

    return item === "Waldo";
  };
  let waldo = arr.find(findCallback); */
  const waldo = arr.find((item) => item === "Waldo");
  //const hasWaldo = !!arr.find((item) => item === "Waldo");

  //console.log("My waldo var", waldo);

  /* for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      waldo = arr[i];

      break;
    }
  } */

  return waldo ? "I found Waldo!" : "No Waldo here...";
}

function filterWaldo(arr) {
  const waldoArray = arr.filter((item) => item === "Waldo");

  return waldoArray;
}

const waldoArray = ["Ante", "Mate", "Ivan", "Antea", "Waldo", "Matea", "Waldo"];
const peopleArray = ["Ante", "Mate", "Ivan", "Antea", "Matea", "Ivana"];

/* console.log(findWaldo(waldoArray));
console.log(findWaldo(peopleArray)); */

//console.log([1, 2, 3, 4, 5, 6, 7, 8].filter((item) => item <= 3));

/* const objs = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];

console.log(objs.filter(({ value }) => value <= 2)); */

console.log(filterWaldo(waldoArray));
console.log(filterWaldo(peopleArray));
