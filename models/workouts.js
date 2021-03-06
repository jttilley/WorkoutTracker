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
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    distance: {
      type: Number
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }
  }]
},
{
  toJSON: {
  virtuals: true 
  }
});

workoutSchema.virtual('totalDuration').get(function () {
  // add up all the exercises durations
  return this.exercises.reduce((total, exercises) => { 
    return total + exercises.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;