const StudySet = require("../models/set-model");

insertStudySet = (req, res) => {
  console.log(`Input req is ${req}`);
  const body = req.body;
  console.log(`Input body is ${body} and ${body[0]} and ${body[1]}`);

  if (!body) {
    console.log(`Invalid set detected.`);
    return res.status(400).json({
      success: false,
      error: "Invalid set detected.",
    });
  }

  const studySet = new StudySet(body);

  if (!studySet) {
    console.log("Study set is not a study set ");
    return res.status(400).json({ success: false, error: err });
  }
  console.log("ready to save");

  studySet
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: studySet._id,
        message: "Study Set successfully created!",
      });
    })
    .catch((error) => {
      console.log(`Caught error at the end! the error was ${error}`);
      // window.alert(`Study set not created`);
      return res.status(400).json({
        error,
        message: "Study Set was not created!",
      });
    });

  console.log("successfully called controller");
};

module.exports = {
  insertStudySet,
};
