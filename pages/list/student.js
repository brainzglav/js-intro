export function displayList(students) {
  clearList();
  students.forEach(({ name, testResult, hasPassed }) => {
    const listItem = document.createElement("li");
    const statusItem = document.createElement("div");

    listItem.textContent = `Student: ${name} Test Result: ${testResult}`;
    listItem.className = "student-list__item";
    statusItem.className = "status-marker";

    if (!hasPassed) {
      statusItem.classList.add("status-marker--danger");
    }

    listItem.appendChild(statusItem);
    addListItem(listItem);
  });
}

export function clearList() {
  const list = document.getElementById("student-list");

  list.innerHTML = "";
}

export function addListItem(listItem) {
  const list = document.getElementById("student-list");

  list.appendChild(listItem);
}

export function createStudentList(names) {
  let students = names.map((name, id) => {
    const testResult = Math.round(Math.random() * 100);

    return {
      id,
      name,
      testResult,
      hasPassed: testResult >= 50,
      printStudent: () =>
        console.log(`Student ${name} has ${testResult} points`),
    };
  });
  const studentsWhoPassed = students.filter(({ hasPassed }) => hasPassed);

  if (studentsWhoPassed.length / students.length < 0.5) {
    students = students.map((student) => {
      // ... se u ovakvom slucaju nazivaju spread operator

      return {
        ...student,
        hasPassed: student.testResult >= 40,
      };
    });
  }

  return { students, studentsWhoPassed };
}

export default {
  displayList,
  clearList,
  addListItem,
  createStudentList,
};
