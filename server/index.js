const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const setRouter = require("./routes/studyset-router");
const testRouter = require("./routes/testentry-router");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", setRouter);
app.use("/api", testRouter);

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Server running on port " + port);
