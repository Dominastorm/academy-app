const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/create", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
      mobile:req.body.mobile,
      srn:req.body.srn,
      email: req.body.email,
      sem: req.body.sem,
      section: req.body.section,
      branch: req.body.branch,
      program: req.body.program,
      classId: req.body.classId,
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (e) {
    console.log(e);
  }
});
router.post("/", async (req, res) => {
  const users = await User.find({ username: req.body.username });
  if (users == null) {
    return res.send({ message: "error" });
  }
  try {
    for (let user of users) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.json(user);
        return;
      }//my name is lakhan
    }
    res.status(401).send({message:"invalid"});
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
