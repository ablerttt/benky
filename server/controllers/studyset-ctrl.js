const StudySet = require("../models/set-model");

insertStudySet = (req, res) => {
  const body = req.body;

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
        id: movie._id,
        message: "Movie created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Movie not created!",
      });
    });

  console.log("over");
};

getAllStudySets = (req, res) => {
  StudySet.find({}, (err, studysets) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!studysets.length) {
      return res
        .status(404)
        .json({ success: false, error: `Study Sets not found` });
    }
    return res.status(200).json({ success: true, data: studysets });
  }).catch((err) => console.log(err));
};

getStudySetById = (req, res) => {
  console.log(`input id is ${req.params.id}`);
  StudySet.findOne({ _id: req.params.id }, (err, studyset) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: studyset });
  }).catch((err) => console.log(err));
};

module.exports = {
  insertStudySet,
  getAllStudySets,
  getStudySetById,
};
