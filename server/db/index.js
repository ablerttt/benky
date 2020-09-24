const mongoose = require("mongoose");
const connection =
  "mongodb+srv://albert:xVMENDHCGi6sGaj@benkymain.wlkyu.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
