const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudySet = new Schema(
  {
    name: { type: String, required: true },
    definition: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("studySet", StudySet);
