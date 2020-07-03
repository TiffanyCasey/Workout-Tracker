const router = require("express").Router();
const Workout = require("../models/workouts.js");

 // Read last workout - router working but not reading schema right 
router.get("/api/workouts", (req, res) => {
  console.log("Reading last workout");
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create a new workout - console WAS working, but not getting  
router.post("/api/workouts", ({ body }, res) => {
  console.log("Workout created");
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      console.log("cannot create a new workout");
      res.status(400).json(err);
    });
});

// // Add an exercise 
router.put("/workouts/:id", ({ params }, res) => {
  console.log("Adding Exercise");
  Workout.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        read: true
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

// Gets daily workouts and aggregates into charts 
router.get("/api/workouts/range", (req, res) => {
  // console.log("Aggregate daily workouts");
  // Workout.find({})
  // .then(dbWorkout => {
  //   res.json(dbWorkout);
  // })
  // .catch(err => {
  //   console.log("cannot select workouts");
  //   res.status(400).json(err);
  // });
});

module.exports = router;