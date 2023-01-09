function displayList(students) {
  students.forEach(({ name, testResult }) => {
    const list = document.getElementById("student-list");
    const listElement = document.createElement("li");

    listElement.textContent = `Student: ${name} Test Result: ${testResult}`;
    list.appendChild(listElement);
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

console.log({ list, listElement });

//students.forEach(({ printStudent }) => printStudent());
//console.log({ students, studentsWhoPassed, firstExcellentStudent });
