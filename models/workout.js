const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: "Excercise Type"
  },
  name: {
    type: String,
    trim: true,
    required: "Excercise Name"
  },
  value: {
    type: Number,
    required: "Distance"
  },
  value: {
    type: Number,
    required: "Duration"
  },

  value: {
    type: Number,
    required: "Weight"
  },
  value: {
    type: Number,
    required: "Sets"
  },
  value: {
    type: Number,
    required: "Reps"
  },
  });
  
  const Workout = mongoose.model("Transaction", workoutSchema);
  
  module.exports = Workout;