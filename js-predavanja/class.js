class Student {
  #id;
  name;
  surname;
  percentage = 50;

  get fullName() {
    return `${this.name} ${this.surname}`;
  }

  get hasPassed() {
    return this.percentage > 50;
  }

  set id(id) {
    this.#id = id;
  }

  constructor({ name, surname = "Horvat", percentage }) {
    this.name = name;
    this.surname = surname;
    this.percentage = percentage;
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

console.log(users);

const student = new Student({});

const studentList = users.map((student) => new Student(student));

studentList.forEach((student) =>
  console.log(student.fullName, student.hasPassed)
);
//const studentFromFactory = StudentFactory("Antea", "Antic");

//studentFromFactory.fun();

/* console.log({ student });

console.log(student.fullName);

student.printStudentPercentage(); */
