import { displayList, createStudentList } from "./student.js";

const arr = ["Ante", "Mate", "Antea", "Matea", "Sime", "Marko"];
const { students, studentsWhoPassed } = createStudentList(arr);
const firstExcellentStudent = students.find(
  ({ testResult }) => testResult >= 90
);
const totalPoints = students.reduce(
  (sum, { testResult }) => sum + testResult,
  0
);
const allStudentsBtn = document.getElementById("all-btn");
const filteredStudentsBtn = document.getElementById("filtered-btn");

allStudentsBtn.addEventListener("click", () => displayList(students));
filteredStudentsBtn.addEventListener("click", () =>
  displayList(studentsWhoPassed)
);

//students.forEach(({ printStudent }) => printStudent());
//console.log({ students, studentsWhoPassed, firstExcellentStudent });

displayList(students);
console.log(students);
