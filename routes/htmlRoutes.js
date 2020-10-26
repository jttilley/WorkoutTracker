const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workouts.js")

// create a workout
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// add an exercise
router.get("/exercise?", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});


// show stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
})

module.exports = router;