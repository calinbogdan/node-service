const express = require('express');
const studentRoutes = require('./student/student.routes');

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!");
})

module.exports = app;