const TestEntry = require("../models/test-model");

insertTestEntry = (req, res) => {
  const body = req.body;

  if (!body) {
    console.log("Invalid test result detected.");
    return res.status(400).json({
      success: false,
      error: "Invalid test entry detected",
    });
  }

  let testEntry = new TestEntry();
  testEntry.setId = body.setId;
  testEntry.title = body.title;
  testEntry.dateTaken = body.dateTaken;
  testEntry.questionSet = body.questionSet;

  if (!testEntry) {
    console.log("Test Entry is not a test entry.");
    return res
      .status(400)
      .json({ success: false, error: "Test Entry is not a test entry." });
  }

  console.log(testEntry);

  testEntry
    .save()
    .then(() => {
      console.log("Success! Test Entry was created.");
      return res.status(201).json({
        success: true,
        id: testEntry._id,
        message: "Test Entry created!",
      });
    })
    .catch((error) => {
      console.log(`Fail! Test Entry was not created with error ${error}`);
      return res.status(400).json({
        error,
        message: "Test Entry was not created.",
      });
    });
};

getAllTestEntries = (req, res) => {
  TestEntry.find({}, (err, testEntries) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!testEntries.length) {
      return res
        .status(404)
        .json({ success: false, error: "Test Entry was not found." });
    }

    return res.status(200).json({ success: true, data: testEntries });
  }).catch((err) => {
    console.log(err);
    return res.status(400).json({ success: false, error: err });
  });
};

getTestEntryById = (req, res) => {
  TestEntry.findOne({ _id: req.params.id }, (err, testEntry) => {
    if (err) {
      return res.status(400).json({ success: false, valid: false, error: err });
    }

    if (!testEntry) {
      return res.status(400).json({ success: true, valid: false });
    }

    return res
      .status(200)
      .json({ success: true, valid: true, data: testEntry });
  }).catch((err) => {
    console.log(err);
    return res.status(400).json({ success: false, valid: false, error: err });
  });
};

module.exports = {
  insertTestEntry,
  getAllTestEntries,
  getTestEntryById,
};
