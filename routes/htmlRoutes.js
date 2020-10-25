const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workouts.js")

// create a workout
router.get("/exercise", (req, res) => {
  console.log("exercise route");
  res.sendFile(path.join(__dirname + "../public/exercise.html"));
  // Workout.create({}).then(({ _id }) => {
  //   console.log('_id: ', _id);
    
  //   location.search = "?id=" + _id;
  // })
});

// add an exercise
router.get("/exercise/:id", (req, res) => {
  console.log("exercise/:id route");
  // Workout.update({}).then(({ _id }) => {
  //   console.log('_id: ', _id);
    
  //   location.search = "?id=" + _id;
  // })
  res.sendFile(path.join(__dirname + "../public/exercise.html"));
});