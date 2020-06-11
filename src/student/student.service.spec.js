const {
  getStudents,
  getStudentById,
  addStudent,
} = require("./student.service");

describe("test getStudents", () => {
  it("should return an array", () => {
        expect(getStudents()).toBeArray();
    });
});

describe("test getStudentById", () => {
  it("should return undefined if there is no id given", () => {
        expect(getStudentById(-1)).toBe(undefined);
    });

  it("should return an object if the id is valid", () => {
        addStudent({
            id: 1,
            firstName: "Calin",
            lastName: "Bogdan",
        });
        expect(getStudentById(1)).toBeDefined();
    });
});

describe("test addStudent", () => {
    it("should add the student to the store", () => {
        const studentsCount = getStudents().length;
        addStudent({
            id: 1,
            firstName: "Calin",
            lastName: "Bogdan",
        });
        expect(getStudents().length).toBe(studentsCount + 1);
    });
});
