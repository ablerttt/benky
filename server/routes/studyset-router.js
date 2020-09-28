const express = require("express");
var authMiddleware = require("../middleware/auth-middleware");

const StudySetCtrl = require("../controllers/studyset-ctrl");

const router = express.Router();

// router.post("/set", StudySetCtrl.insertStudySet);
router.post("/set", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.insertStudySet(req, res);
});
router.get("/setlist", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.getAllStudySets(req, res);
});
router.get("/existingset", authMiddleware.checkIfAuthenticated, (req, res) => {
  StudySetCtrl.checkTitleExists(req, res);
});
router.get("/set/:id", StudySetCtrl.getStudySetById);
router.get("/validset/:id", StudySetCtrl.checkIdExists);
router.put("/set/:id", StudySetCtrl.updateStudySetById);
router.delete("/set/:id", StudySetCtrl.removeStudySetById);
router.get("/existingset", StudySetCtrl.checkTitleExists);

module.exports = router;
