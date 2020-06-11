const students = [
  { id: 1, firstName: "Calin", lastName: "Bogdan", email: "calin.bogdan" },
  { id: 2, firstName: "George", lastName: "Cabal", email: "george.cabal" },
  { id: 3, firstName: "Emanuel", lastName: "Conea", email: "emanuel.conea" },
  { id: 4, firstName: "Dragos", lastName: "Dordea", email: "dragos.dordea" },
];

const getStudents = () => {
  return students;
};

const getStudentById = (id) => {
  return students.find((student) => student.id === id);
};

const addStudent = (student) => {
  students.push(student);
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent
};
