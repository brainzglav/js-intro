function checkBrackets(str) {
  let brackets = 0;
  const hasBrackets = !!str.split("").find((val) => val === "(" || val === ")");

  if (!hasBrackets) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];

    if (curr === "(") {
      brackets++;
    } else if (curr === ")") {
      brackets--;
    }

    if (brackets < 0) {
      return false;
    }
  }

  return !brackets;
}

const test1 = "(a+b) * (c - d)";
const test2 = "(a+b * (c - d)";
const test3 = "(c * (a+b)) * (x - (y * (c - d)))";
const test4 = ")(";
const test5 = "";

console.log({ test1, result: checkBrackets(test1) });
console.log({ test2, result: checkBrackets(test2) });
console.log({ test3, result: checkBrackets(test3) });
console.log({ test4, result: checkBrackets(test4) });
console.log({ test5, result: checkBrackets(test5) });
