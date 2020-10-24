const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models")

// create a workout
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"));
  // Workout.create({}).then(({ _id }) => {
  //   console.log('_id: ', _id);
    
  //   location.search = "?id=" + _id;
  // })
});

// add an exercise
router.get("/exercise/:id", (req, res) => {
  // Workout.create({}).then(({ _id }) => {
  //   console.log('_id: ', _id);
    
  //   location.search = "?id=" + _id;
  // })
  res.sendFile(path.join(__dirname, "public/exercise.html"));
});