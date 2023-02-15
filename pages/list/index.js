import { displayList, createStudentList } from "./student.js";

async function addNewUser(event) {
  event.preventDefault();

  const _res = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({ name: "Test" }),
  });

  console.log(_res);
}

const res = await fetch("http://localhost:3000/users");
const arr = await res.json();
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
const addButtonElement = document.getElementById("add-btn");

addButtonElement.addEventListener("click", addNewUser);

totalElement.textContent = totalElement.textContent.concat(" ", totalPoints);

// Inicijalizacija
displayList(students);
