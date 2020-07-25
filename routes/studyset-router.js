const express = require("express");

const StudySetCtrl = require("../controllers/studyset-ctrl");

const router = express.Router();

router.post("/set", StudySetCtrl.insertStudySet);
// router.put("/set/:id", StudySetCtrl.updateStudySet);
// router.delete("/set/:id", StudySetCtrl.deleteStudySet);
// router.get("/set/:id", StudySetCtrl.getStudySetById);
// router.get("/sets", StudySetCtrl.getStudySets);

module.exports = router;
