function displayList(students) {
  students.forEach(({ name, testResult }) => {
    const list = document.getElementById("student-list");
    const listItem = document.createElement("li");

    listItem.textContent = `Student: ${name} Test Result: ${testResult}`;
    listItem.className = "student-list__item";
    list.appendChild(listItem);
  });
}

const arr = ["Ante", "Mate", "Antea", "Matea", "Sime", "Marko"];
const students = arr.map((name, id) => {
  const testResult = Math.round(Math.random() * 100);

  return {
    id,
    name,
    testResult: name === "Marko" ? null : testResult,
    printStudent: () => console.log(`Student ${name} has ${testResult} points`),
  };
});
const studentsWhoPassed = students.filter(({ testResult }) => testResult >= 50);
const firstExcellentStudent = students.find(
  ({ testResult }) => testResult >= 90
);
const totalPoints = students.reduce(
  (sum, { testResult }) => sum + testResult,
  0
);

console.log(students);

const allStudentsBtn = document.getElementById("all-btn");
const filteredStudentsBtn = document.getElementById("filtered-btn");

allStudentsBtn.addEventListener("click", () => displayList(students));
filteredStudentsBtn.addEventListener("click", () =>
  displayList(studentsWhoPassed)
);

//students.forEach(({ printStudent }) => printStudent());
//console.log({ students, studentsWhoPassed, firstExcellentStudent });

displayList(students);
