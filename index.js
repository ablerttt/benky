const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = 3000;
const setRouter = require("./routes/studyset-router");

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", setRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
