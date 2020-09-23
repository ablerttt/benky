const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const setRouter = require("./routes/studyset-router");
const testRouter = require("./routes/testentry-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", setRouter);
app.use("/api", testRouter);

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
