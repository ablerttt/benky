const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OptionEntry = new Schema({
  description: { type: String, required: true },
  correct: { type: Boolean },
});

const QuestionEntry = new Schema({
  term: { type: String, required: true },
  correctAnswer: { type: String, required: true },
  options: { type: [OptionEntry], required: true },
});

const TestEntry = new Schema({
  setId: { type: String, required: true },
  title: { type: String, required: true },
  taken: { type: Date, required: true },
  questionSet: { type: [QuestionEntry], required: true },
});

module.exports = mongoose.model("testresult", TestEntry);
