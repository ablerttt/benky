const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  studySets: [{ type: Schema.Types.ObjectId, ref: "StudySet" }],
  testResults: [{ type: Schema.Types.ObjectId, ref: "TestEntry" }],
});

module.exports = mongoose.model("user", UserSchema);
