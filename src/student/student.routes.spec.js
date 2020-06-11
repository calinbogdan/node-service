const request = require("supertest");
const app = require("../app");

describe("student routes test", () => {
  it("should return 200 on GET", async () => {
    const res = await request(app).get("/students");
    expect(res.status).toEqual(200);
  });

  it("should return 201 on POST", async () => {
    const res = await request(app).post("/students").send({
        firstName: "Calin", 
        lastName: "Bogdan"
    });
    expect(res.status).toEqual(201);
  });

  it("should return 400 if the student in the body doesn't have a firstName and lastName specified", async () => {
    const res = await request(app).post("/students").send({
      email: "calin.bogdan",
    });
    expect(res.status).toEqual(400);
  });
});
