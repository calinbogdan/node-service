const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello!");
});

const PORT = process.env.PORT || 3200;
app.listen(PORT);