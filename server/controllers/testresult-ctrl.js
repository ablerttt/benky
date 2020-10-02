const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");
const TestEntry = require("../models/test-model");

insertTestEntry = (req, res) => {
  console.log("INSERT TEST ENTRY");
  const body = req.body;

  if (!body) {
    console.log("Invalid test result detected.");
    return res.status(400).json({
      success: false,
      error: "Invalid test entry detected",
    });
  }

  let testEntry = new TestEntry();
  testEntry.setId = body.headers.id;
  testEntry.title = body.headers.title;
  testEntry.dateTaken = body.headers.date;
  testEntry.questionSet = body.headers.testresult;
  testEntry.uid = req.authId;

  if (!testEntry) {
    console.log("Test Entry is not a test entry.");
    return res
      .status(400)
      .json({ success: false, error: "Test Entry is not a test entry." });
  }

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
  TestEntry.find({ uid: req.authId }, { questionSet: 0 })
    .then((testEntries) => {
      if (!testEntries.length) {
        return res.status(200).json({ success: true, data: {} });
      }

      return res.status(200).json({ success: true, data: testEntries });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err });
    });
};

getAllTestEntryTitles = (req, res) => {
  console.log(req.body);
  console.log("GETTING TITLES");
  TestEntry.find({ uid: req.authId }, { title: 1, dateTaken: 1 })
    .then((testEntries) => {
      if (!testEntries.length) {
        return res.status(200).json({ success: true, data: {}, empty: true });
      }

      return res
        .status(200)
        .json({ success: true, data: testEntries, empty: false });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, error: err, empty: true });
    });
};

getTestEntryById = (req, res) => {
  console.log(req);
  TestEntry.findOne(
    { _id: req.params.id, uid: req.authId },
    (err, testEntry) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, valid: false, error: err });
      }

      if (!testEntry) {
        return res.status(400).json({ success: true, valid: false });
      }

      return res
        .status(200)
        .json({ success: true, valid: true, data: testEntry });
    }
  ).catch((err) => {
    console.log(err);
    return res.status(400).json({ success: false, valid: false, error: err });
  });
};

module.exports = {
  insertTestEntry,
  getAllTestEntries,
  getTestEntryById,
  getAllTestEntryTitles,
};
