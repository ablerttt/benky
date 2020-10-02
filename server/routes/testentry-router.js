const express = require("express");
const router = express.Router();
var authMiddleware = require("../middleware/auth-middleware");

const TestEntryCtrl = require("../controllers/testresult-ctrl");

// router.post("/test", TestEntryCtrl.insertTestEntry);
router.post("/test", authMiddleware.checkIfAuthenticated, (req, res) => {
  TestEntryCtrl.insertTestEntry(req, res);
});
router.get("/testresults", authMiddleware.checkIfAuthenticated, (req, res) => {
  TestEntryCtrl.getAllTestEntries(req, res);
});
router.get("/test/:id", authMiddleware.checkIfAuthenticated, (req, res) => {
  TestEntryCtrl.getTestEntryById(req, res);
});
router.get("/testtitles", authMiddleware.checkIfAuthenticated, (req, res) => {
  TestEntryCtrl.getAllTestEntryTitles(req, res);
});

module.exports = router;
