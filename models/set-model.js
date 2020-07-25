const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetEntry = new Schema({
  term: { type: String, required: true },
  description: { type: [String], required: true },
});

const StudySet = new Schema(
  {
    title: { type: String, required: true },
    cards: [SetEntry],
  },
  { timestamps: true }
);

module.exports = mongoose.model("studySet", StudySet);
