const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const setRouter = require("./routes/studyset-router");
const testRouter = require("./routes/testentry-router");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("This server is working, yay!");
});

app.use("/api", setRouter);
app.use("/api", testRouter);

var port = process.env.PORT || 5000;

app.listen(port);

console.log("Server running on port " + port);
