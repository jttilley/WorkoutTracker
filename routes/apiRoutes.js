const router = require("express").Router();
const Workouts = require("../models/workouts");

router.get("/api/workouts", (req, res) => {
  
})




router.get("/api/workouts/range",(req,res) => {
  Workouts.find({}).then(workouts => {
    res.json(workouts);
  }).catch(err => {
    res.status(400).json(err);
  });
});


module.exports = router;
