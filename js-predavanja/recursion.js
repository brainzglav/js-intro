/* Rekurzivna funkcija je funkcija koja poziva samu sebe */

// Zdk: 5!
// Input: 5
// Output: 5 * 4 * 3 * 2 * 1

function fact(num) {
  if (num === 1) {
    console.log("End", num);

    return num;
  }

  console.log("Call", num);

  const nextNum = fact(num - 1);

  console.log("Next num", nextNum);

  return num * nextNum;
}

function fact(num) {
  if (num === 1) {
    return num;
  }

  return num * fact(num - 1);
}

/* debugger;
console.log(fact(5)); */

function printNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    console.log("Counter:", i);

    if (Array.isArray(elem)) {
      printNums(elem);
    } else {
      console.log(elem);
    }
  }
}

const testArr = [[1, 2, 3, [4, 5], 6], [1, 2], 5];

debugger;

printNums(testArr);
