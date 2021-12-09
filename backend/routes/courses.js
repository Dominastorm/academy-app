const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const ObjectId=require('mongodb').ObjectId;

// router.get("/", async (req, res) => {
//   try{
//     const courses=await Course.find();
//     res.json(courses);
//   }catch(e){
//     res.json({message:e});
//   }
// });
router.get("/:courseId", async (req, res) => {
  try{
    
    const course=await Course.findById(ObjectId(req.params.courseId));
    res.json(course);
  }
  catch(e){
    res.json({message:e});
  }
});

router.post("/", async (req, res) => {
  const course = new Course({
    name: req.body.name,
    courseId: req.body.courseId,
    units:req.body.units,
  });
  const savedCourse=await course.save();
  res.json(savedCourse);
    
});

module.exports = router;
