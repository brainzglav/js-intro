class Human {
  name;
  surname;
  weight;
  height;
  sex;

  constructor({ name, surname, weight, height, sex }) {
    this.name = name;
    this.surname = surname;
    this.weight = weight;
    this.height = height;
    this.sex = sex;
  }
}

class Student extends Human {
  #id;
  percentage;
  passedPercentage = 50;

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  get hasPassed() {
    return this.percentage > this.passedPercentage;
  }

  set id(id) {
    this.#id = id;
  }

  constructor({ percentage, passedPercentage, ...rest }) {
    super(rest);

    this.percentage = percentage;
    this.passedPercentage = passedPercentage;
  }

  printStudentPercentage() {
    console.log(this.name, this.surname, "has", this.percentage, "%");
  }
}

/* 
function StudentFactory(name, surname, percentage = 50) {
  return {
    name,
    surname,
    percentage,
    fun: function () {
      console.log(this.name, this.surname);
    },
  };
}
 */

// Konstruktorski poziv student klase
const { users } = require("../db.json");

console.log(human);

//console.log(users);

const student = new Student({
  name: "Ante",
  surname: "Antic",
  sex: "Male",
  percentage: 45,
  passedPercentage: 50,
});
/* 
console.log("1", student.hasPassed, student);

student.passedPercentage = 40;

console.log("2", student.hasPassed, student);
 */
/* 
const studentList = users.map((student) => new Student(student));

studentList.forEach((student) =>
  console.log(student.fullName, student.hasPassed)
); 
*/
//const studentFromFactory = StudentFactory("Antea", "Antic");

//studentFromFactory.fun();

/* console.log({ student });

console.log(student.fullName);

student.printStudentPercentage(); */
