import {
  displayList,
  createStudentList,
  url,
  getValues,
  selectedStudent,
  modifyStudent,
  addNewStudent,
} from "./student.js";

function onSubmit(event) {
  event.preventDefault();

  const { name, percentage } = getValues(event.target);

  // Early return
  if (!name) {
    alert("Please specify student name!");

    return;
  }

  if (!percentage || percentage < 0 || percentage > 100) {
    alert("Incorrect percentage, must be between 0 and 100!");

    return;
  }

  if (selectedStudent) {
    modifyStudent({ name, percentage });

    return;
  }

  addNewStudent({ name, percentage });
}

const { data } = await axios.get(url("/users"));
const { students, studentsWhoPassed } = createStudentList(data);
const totalPoints = students.reduce(
  (sum, { testResult }) => sum + testResult,
  0
);
let isSwitchActive = false;
const switchElement = document.getElementById("filter-switch");
const totalElement = document.getElementById("total-points");
const studentFormElement = document.getElementById("student-form");

studentFormElement.addEventListener("submit", onSubmit);
switchElement.addEventListener("click", () => {
  isSwitchActive = !isSwitchActive;
  switchElement.classList.toggle("switch--enabled");
  displayList(isSwitchActive ? studentsWhoPassed : students);
});

totalElement.textContent = totalElement.textContent.concat(" ", totalPoints);

// Inicijalizacija
displayList(students);
