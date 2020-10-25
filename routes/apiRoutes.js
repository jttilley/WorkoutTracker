const router = require("express").Router();
const Workouts = require("../models/workouts");

// get all workouts
router.get("/api/workouts", (req, res) => {
  Workouts.find({}).then(all => {
    res.json(all);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// create a workout
router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body).then(result => {
    res.json(result);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// add an exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workouts.findOneAndUpdate({_id: params.id}, { $push: { body } }, { new: true })
    .then(result => {
      res.json(result);
    }).catch(err => {
      res.status(400).json(err);
    });
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
