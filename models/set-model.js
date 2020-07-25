const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetEntry = new Schema({
  name: { type: String, required: true },
  def: { type: [String], required: true },
});

const StudySet = new Schema(
  {
    title: { type: String, required: true },
    studySet: [SetEntry],
  },
  { timestamps: true }
);

module.exports = mongoose.model("studySet", StudySet);
