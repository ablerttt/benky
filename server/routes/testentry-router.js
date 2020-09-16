const express = require("express");

const TestEntryCtrl = require("../controllers/testresult-ctrl");

const router = express.Router();

router.post("/test", TestEntryCtrl.insertTestEntry);
router.get("/testresults", TestEntryCtrl.getAllTestEntries);
router.get("/test/:id", TestEntryCtrl.getTestEntryById);
router.get("/testtitles", TestEntryCtrl.getAllTestEntryTitles);

module.exports = router;
