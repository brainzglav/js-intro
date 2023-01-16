import { displayList, createStudentList } from "./student.js";

const arr = ["Ante", "Mate", "Antea", "Matea", "Sime", "Marko"];
const { students, studentsWhoPassed } = createStudentList(arr);
const totalPoints = students.reduce(
  (sum, { testResult }) => sum + testResult,
  0
);
let isSwitchActive = false;
const switchElement = document.getElementById("filter-switch");
switchElement.addEventListener("click", () => {
  isSwitchActive = !isSwitchActive;
  switchElement.classList.toggle("switch--enabled");
  displayList(isSwitchActive ? studentsWhoPassed : students);
});

const totalElement = document.getElementById("total-points");

totalElement.textContent = totalElement.textContent.concat(" ", totalPoints);

// Inicijalizacija
displayList(students);
