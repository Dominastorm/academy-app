const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
const Class = require("../models/Class");

router.get("/:classId", async (req, res) => {
  try {
    const _class = await Class.find({classId:req.params.classId});
    // console.log(req.params.classId)
    res.json(_class);
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const _class = new Class({
      branch: req.body.branch,
      subjects: req.body.subjects,
      students: req.body.students,
      classId: req.body.classId,
      
    });
    const savedClass=await _class.save();
    res.json(savedClass);
  } catch (e) {
    console.log(e);
  }
  
});

module.exports = router;
