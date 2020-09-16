const StudySet = require("../models/set-model");

checkTitleExists = (req, res) => {
  // console.log(req);
  const title = req.query.title;

  StudySet.findOne({ title: title }, (err, existingSet) => {
    if (err) {
      return res.status(400).json({ success: false, valid: false, error: err });
    }
    console.log("Existing Set: " + existingSet);
    if (existingSet) {
      return res.status(200).json({ success: true, valid: false });
    } else {
      return res.status(200).json({ success: true, valid: true });
    }
  }).catch((error) => {
    console.log(error);
    return res.status(400).json({ success: false, valid: false, error: error });
  });
};

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
    console.log("Study set is not a study set.");
    return res
      .status(400)
      .json({ success: false, error: "Study set is not a study set." });
  }

  studySet
    .save()
    .then(() => {
      console.log("Success! Study set was created.");
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
};

getAllStudySets = (req, res) => {
  StudySet.find({})
    .then((studysets) => {
      if (!studysets.length) {
        return res.status(200).json({ success: true, data: {} });
      }
      return res.status(200).json({ success: true, data: studysets });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
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
    return res.status(400).json({ success: false, valid: false, error: err });
  });
};

getStudySetById = (req, res) => {
  StudySet.findOne({ _id: req.params.id }, (err, studyset) => {
    if (err) {
      return res.status(400).json({ success: false, valid: false, error: err });
    }

    if (!studyset) {
      return res.status(400).json({ success: true, valid: false });
    }

    return res.status(200).json({ success: true, valid: true, data: studyset });
  }).catch((err) => {
    console.log(err);
    return res.status(400).json({ success: false, valid: false, error: err });
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
      .catch((err) => {
        console.log("Did not update study set.");
        return res.status(404).json({ success: false, error: err });
      });
  });
};

removeStudySetById = (req, res) => {
  StudySet.findOneAndDelete({ _id: req.params.id }, (err) => {
    if (err) {
      console.log(`Failed to find the study set to delete.`);
      return res.status(400).json({ success: false, error: err });
    }
    console.log("Success!");
    return res.status(200).json({ success: true });
  }).catch((err) => {
    console.log("Error found: " + err);
    return res.status(400).json({ success: false, error: err });
  });
};

module.exports = {
  checkTitleExists,
  insertStudySet,
  getAllStudySets,
  getStudySetById,
  checkIdExists,
  updateStudySetById,
  removeStudySetById,
};
