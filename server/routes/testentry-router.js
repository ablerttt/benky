const express = require("express");

const TestEntryCtrl = require("../controllers/testresult-ctrl");

const router = expres.Router();

router.post("/testres", TestEntryCtrl.insertTestEntry);
router.get("/testresults", TestEntryCtrl.getAllTestEntries);
router.get("/test/:id", TestEntryCtrl.getTestEntryById);

module.exports = router;
