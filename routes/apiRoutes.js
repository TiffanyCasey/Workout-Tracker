const app = require("express").Router();
const Workout = require("../models/workouts.js");

 // Read last workout - DONE 
app.get("/api/workouts", (req, res) => {
  console.log("Reading workout")
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create a new workout DONE 
app.post("/api/workouts", ({ body }, res) => {
  console.log("Creating a new workout")
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Add an exercise - DONE
app.put("/api/workouts/:id", ({ params }, res) => {
  console.log("Adding an exercise")
  Workout.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $push: {
        exercises: body
      }
    },
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// Gets daily workouts and aggregates into charts. Not clear how this is differnt from app.post("/api/workouts"
app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = app;
