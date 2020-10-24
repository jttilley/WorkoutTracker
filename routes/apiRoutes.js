const router = require("express").Router();
const Workouts = require("../models/workouts");

// get all workouts
router.get("/api/workouts", (req, res) => {
  
})

// create a workout
router.post("/api/workouts", ({ body }, res) => {

})

// add an exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  
})

// get workouts in a range
router.get("/api/workouts/range",(req,res) => {
  Workouts.find({}).then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;
