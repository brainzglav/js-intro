function mapErrors(arr) {
  /* 
  const errors = [];

  for (let i = 0; i < arr.length; i++) {
    const error = {
      id: i,
      message: arr[i],
      log: (message) => console.log("Error:", message),
    };

    errors.push(error);
  }
 */

  const errors = arr.map((message, id) => ({
    id,
    message,
    log: () => console.log("Error:", message),
  }));
  //const filteredErrors = arr.filter(({ id }) => id <= 1);

  return errors;
}

function logErrors(arr) {
  arr.forEach(({ log }) => log());
}

const errorMessages = [
  "Syntax Error",
  "Constant assignment error",
  "Fatal error",
  "404 error",
];
/* const errorObj = {
  id: 0,
  message: "Syntax Error",
  log: () => console.log("Error: Syntax Error"),
}; */
const errors = mapErrors(errorMessages);

console.log(errors);
logErrors(errors);
