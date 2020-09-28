const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  studySets: [{ type: Schema.Types.ObjectId, ref: "StudySet" }],
  testResults: [{ type: Schema.Types.ObjectId, ref: "TestEntry" }],
  email: { type: String, required: true },
  id: { type: String },
});

module.exports = mongoose.model("user", UserSchema);
