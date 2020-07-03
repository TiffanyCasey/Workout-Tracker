const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
    },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    }
  ]   
},
  /// VERIFY 
{
  toJSON: {
  // include any virtual properties when data is requested
  virtuals: true,
  },
}
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
}, 0);

/// VERIFY ABOVE
  
});
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;