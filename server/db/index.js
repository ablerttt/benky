const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://albert:xVMENDHCGi6sGaj@benkymain.wlkyu.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

module.exports = db;
