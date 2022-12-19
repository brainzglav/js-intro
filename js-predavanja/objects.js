/* 
const obj = {};

console.log(obj.a);

const kutija = "objectPropName";

//obj.a = "Test";
obj[kutija] = "Test";

const arr = [];

arr[0] = 5;

console.log(arr);

console.log(obj.a);
console.log(obj); 
*/

// Javascript object notation - JSON

const jsonObject = {
  prop1: "Test",
  prop2: "Test",
};

const jsonObject2 = {
  prop2: "Test",
  prop1: "Test",
};

const stringified = JSON.stringify(jsonObject);
const stringified2 = JSON.stringify(jsonObject2);

console.log(jsonObject, stringified, stringified2, JSON.parse(stringified));
