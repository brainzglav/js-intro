function createElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

function createListItem({ name, testResult, hasPassed }) {
  const status = !hasPassed ? "status-marker--danger" : "";
  const html = `
  <li class="student-list__item">
    Student: ${name} Result: ${testResult}
    <div class="status-marker ${status}"></div>
  </li>
  `;

  return createElement(html);
}

export function displayList(students) {
  const list = document.getElementById("student-list");
  // Isto kao i ovo ispod
  // const studentList = students.map((student) => createListItem(student));
  const studentList = students.map(createListItem);

  clearList();
  list.append(...studentList);
}

export function clearList() {
  const list = document.getElementById("student-list");

  list.innerHTML = "";
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
  createStudentList,
};
