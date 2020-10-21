const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
    },
    name: {
  
    },
    duration: {
  
    },
    weight: {
  
    },
    reps: {
  
    },
    sets: {
  
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;