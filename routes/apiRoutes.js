const router = require("express").Router();
const mongoose = require("mongoose");
const Workouts = require("../models/workouts");

// get all workouts
router.get("/api/workouts", (req, res) => {
  // console.log('in api/workouts');
  Workouts.find({}).then(all => {
    // console.log('all: ', all);
    res.json(all);
  }).catch(err => {
    // console.log('get all workouts err: ', err);
    res.status(400).json(err);
  });
});

// create a workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log('create workout body: ', body);
  Workouts.create({}).then(result => {
    // console.log('result: ', result);
    res.json(result);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// add an exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  // console.log('params: ', params);
  // console.log('body: ', body);
  if (body.name !== "") {
    Workouts.findOneAndUpdate({_id: params.id}, { $push: { exercises: body } }, { new: true })
      .then(result => {
        // console.log('result: ', result);
        res.json(result);
      }).catch(err => {
        res.status(400).json(err);
      });
  }
});

// get workouts in a range
router.get("/api/workouts/range",(req,res) => {
  Workouts.find({}).then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;
