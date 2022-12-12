function hello(person) {
  //Local variable for hello scope
  const global = "This is not a global variable";

  //console.log(global);

  console.log(`Hello ${person}!`);
}

const global = "This is a global variable";

//hello("others");

//Ne mozemo iz parent scopea pristupit nasem child scopeu - Reference Error
//console.log(person);

// GLOBAL SCOPE -> function scopea funkcije hello

// Definiranje objekta - object literal

const obj = {
  field1: "This is a field 1",
  field2: 2,
  field3: {
    nested: "This is a nested object field",
  },
  field4: hello,
};

console.log(obj);
console.log(obj.field1);
console.log(obj.field2);
console.log(obj.field3);
console.log(obj.field3.nested);
console.log(obj.field4);
obj.field4("objects");
