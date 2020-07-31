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

  studySet
    .save()
    .then(() => {
      console.log("Success! Study set was created");
      return res.status(201).json({
        success: true,
        id: studySet._id,
        message: "Study set created!",
      });
    })
    .catch((error) => {
      console.log(`Fail! Study set not created with error ${error}`);
      return res.status(400).json({
        error,
        message: "Study set not created!",
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

checkIdExists = async (req, res) => {
  await StudySet.countDocuments({ _id: req.params.id }, (err, count) => {
    if (count > 0) {
      return res.status(200).json({ success: true, valid: true, count: count });
    } else {
      return res
        .status(200)
        .json({ success: true, valid: false, count: count });
    }
  }).catch((err) => {
    console.log(err);
  });
};

updateStudySetById = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      sucess: false,
      error: "Invalid body detected while trying to update a set.",
    });
  }

  StudySet.findOne({ _id: req.params.id }, (err, studyset) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Study set was not found.",
      });
    }

    studyset.title = body.title;
    studyset.cards = body.cards;
    studyset
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: studyset._id,
          message: "Successfully updated the study set.",
        });
      })
      .catch((e) => {
        return res.status(404).json({
          e,
          message: "Did not update the study set.",
        });
      });
  });
};

getStudySetById = (req, res) => {
  StudySet.findOne({ _id: req.params.id }, (err, studyset) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res.status(200).json({ success: true, data: studyset });
  }).catch((err) => console.log(err));
};

removeStudySetById = (req, res) => {
  StudySet.findOneAndDelete({ _id: req.params.id }, (err, studyset) => {
    if (err) {
      console.log(`Failed to find the study set to delete.`);
      return re.status(400).json({ success: false, error: err });
    }

    if (!studyset) {
      console.log(`Not a studyset!`);
      return res
        .status(404)
        .json({ success: false, error: `Study set was not found.` });
    }
    console.log("Success!");
    return res.status(200).json({ success: true, data: studyset });
  }).catch((err) => console.log(err));
};

module.exports = {
  insertStudySet,
  getAllStudySets,
  getStudySetById,
  checkIdExists,
  updateStudySetById,
  removeStudySetById,
};
