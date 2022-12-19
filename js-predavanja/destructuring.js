function startCar({ name = "myCar", color, type, speed, drive, ...rest }) {
  // function startCar(car) {
  //  const { color, type, speed, drive, ...rest } = car;

  console.log(`My car is called ${name}`);
  console.log(`I have a ${color} ${type}`);
  console.log(`It's speed is ${speed}`);
  drive();
  console.log("Other specs are:", rest);
}

const mercedes = {
  type: "Mercedes",
  speed: "250km/h",
  color: "Red",
  model: "S class",
  seats: "Leather",
  tires: "Winter",
  drive: function () {
    console.log("Wruuum!");
  },
};

//startCar(mercedes);

//Rest operator
function min(first, second, third, ...rest) {
  console.log({ first, second, third, rest });
}

const arr = [0, 1, 2, 3, 4, 5];

//Spread operator
min(...arr);
