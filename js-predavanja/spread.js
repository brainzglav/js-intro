// Property istog imena prebrise prethodni property

const obj1 = {
  prop1: true,
  prop2: false,
  prop3: null,
  prop2: true,
};
const obj2 = {
  prop1: true,
  prop2: false,
  prop3: null,
};
const obj3 = {
  ...obj2,
  prop3: "Hello",
};
const obj4 = {
  ...obj2,
  prop4: "Fourth prop",
};

//console.log({ obj1, obj2, obj3, obj4 });

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);
console.log(...arr);
//console.log(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
