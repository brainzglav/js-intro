function makeHelloWorld(name) {
  return () => {
    console.log(`Hello ${name}`);
  };
}

debugger;

const printHello = makeHelloWorld("Ante");

printHello();
