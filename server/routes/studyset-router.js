const express = require("express");

const StudySetCtrl = require("../controllers/studyset-ctrl");

const router = express.Router();

router.post("/set", StudySetCtrl.insertStudySet);
router.get("/setlist", StudySetCtrl.getAllStudySets);
router.get("/set/:id", StudySetCtrl.getStudySetById);
router.get("/validset/:id", StudySetCtrl.checkIdExists);
router.put("/set/:id", StudySetCtrl.updateStudySetById);
router.delete("/set/:id", StudySetCtrl.removeStudySetById);
router.get("/existingset", StudySetCtrl.checkTitleExists);

module.exports = router;
