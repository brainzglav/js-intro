import { displayList, createStudentList, url } from "./student.js";

async function addNewUser(event) {
  console.log({ event, nameInputElement });
  const name = nameInputElement.value;

  // Early return
  if (!name) {
    alert("Please specify student name");

    return;
  }

  const res = await axios.post(url("/users"), { name });

  /* const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  }); */
}

const { data } = await axios.get(url("/users"));
const arr = data.map(({ name }) => name);
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
const nameInputElement = document.getElementById("name-input");

addButtonElement.addEventListener("click", addNewUser);

totalElement.textContent = totalElement.textContent.concat(" ", totalPoints);

// Inicijalizacija
displayList(students);
