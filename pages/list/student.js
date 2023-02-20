export let selectedStudent = null;

export async function addNewStudent(student) {
  const { data } = await axios.post(url("/users"), student);

  return data;
}

// 1. nacin
export async function modifyStudent({ id, ...student }) {
  // 2. nacin
  //export async function modifyStudent( id, student ) {
  const { data } = await axios.put(url(`/users/${id}`), student);

  return data;
}

export async function deleteStudent(id) {
  const { data } = await axios.delete(url(`/users/${id}`));

  return data;
}

function createElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

function selectStudent(id) {
  if (selectedStudent !== null) {
    const prevElement = document.getElementById(`student-${selectedStudent}`);

    prevElement.classList.remove("student-list__item--selected");
  }

  const currentElement = document.getElementById(`student-${id}`);

  if (selectedStudent === id) {
    selectedStudent = null;

    return;
  }

  selectedStudent = id;
  currentElement.classList.add("student-list__item--selected");
}

function createListItem({ id, name, testResult, hasPassed }) {
  const status = !hasPassed ? "status-marker--danger" : "";
  const html = `
  <li id="student-${id}" class="student-list__item">
    Student: ${name} Result: ${testResult}
    <div class="status-marker ${status}"></div>
    <button type="button">X</button>
  </li>
  `;
  const templateElement = createElement(html);
  const listElement = templateElement.childNodes[1];
  const buttonElement = listElement.querySelector("button");

  listElement.onclick = () => selectStudent(id);
  buttonElement.onclick = () => deleteStudent(id);

  return templateElement;
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

export function createStudentList(rawStudents) {
  let students = rawStudents.map(({ id, name, percentage }) => {
    return {
      id,
      name,
      testResult: +percentage,
      hasPassed: percentage >= 50,
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

export function getValues(form) {
  const formData = new FormData(form);

  return Object.fromEntries(formData);
}

export function url(route) {
  return `${API_HOST}${route}`;
}

export const API_HOST = "http://localhost:3000";

export default {
  addNewStudent,
  modifyStudent,
  selectedStudent,
  url,
  API_HOST,
  displayList,
  clearList,
  createStudentList,
  getValues,
};
