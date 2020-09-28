const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionEntry = new Schema({
  term: { type: String, required: true },
  correctAnswer: { type: Number, required: true },
  chosen: { type: Number, required: true },
  options: { type: [String], required: true },
});

const TestEntry = new Schema({
  setId: { type: String, required: true },
  title: { type: String, required: true },
  dateTaken: { type: Date, required: true },
  questionSet: { type: [QuestionEntry], required: true },
  uid: { type: String, required: true },
});

module.exports = mongoose.model("testresult", TestEntry);
