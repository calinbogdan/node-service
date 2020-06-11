const { Router } = require("express");
const { getStudents, addStudent } = require('./student.service');

const router = new Router();

router.get("/", (req, res) => {
  return res.send(getStudents());
});

router.post("/", (req, res) => {
  
  const hasFirstAndLastName = ['firstName', 'lastName'].every(key => Object.keys(req.body).includes(key));

  if (!hasFirstAndLastName) {
    return res.sendStatus(400);
  }

  addStudent(req.body);
  return res.status(201).send(req.body);
});

module.exports = router;