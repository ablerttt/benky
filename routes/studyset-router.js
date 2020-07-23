const StudySet = require("../models/set-model");

createStudySet = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Invalid set detected.",
    });
  }

  const studySet = new StudySet(body);

  if (!studySet) {
    return res.status(400).json({ success: false, error: err });
  }

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
      return res.status(400).json({
        error,
        message: "Study Set was not created!",
      });
    });
};

updateStudySet = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  StudySet.findOne({ _id: req.params.id }, (err, studySet) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Set was not found!",
      });
    }
    studySet.name = body.name;
    studySet.definition = body.definition;

    studySet
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: studySet._id,
          message: "Set was successfully updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Set was not updated!",
        });
      });
  });
};

deleteStudySet = async (req, res) => {
  await StudySet.findOneAndDelete({ _id: req.params.id }, (err, studySet) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!studySet) {
      return res
        .status(404)
        .json({ success: false, error: `Study set was not found` });
    }

    return res.status(200).json({ success: true, data: studySet });
  }).catch((err) => console.log(err));
};

getStudySetById = async (req, res) => {
  await StudySet.findOne({ _id: req.params.id }, (err, studySet) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!studySet) {
      return res
        .status(404)
        .json({ success: false, error: `Study set was not found` });
    }
    return res.status(200).json({ success: true, data: studySet });
  }).catch((err) => console.log(err));
};

getStudySets = async (req, res) => {
  await StudySet.find({}, (err, studySet) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!studySet.length) {
      return res
        .status(404)
        .json({ success: false, error: `Study sets not found` });
    }
    return res.status(200).json({ success: true, data: studySet });
  }).catch((err) => console.log(err));
};

module.exports = {
  createStudySet,
  updateStudySet,
  deleteStudySet,
  getStudySetById,
  getStudySets,
};
