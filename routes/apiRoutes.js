const router = require("express").Router();
const Workout = require("../models/workout.js");

 // Read last workout 
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create a new workout - console working, but not getting  
router.post("/api/workouts", ({ body }, res) => {
  console.log("Workout created") 
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// // Add an exercise 
router.put("/workouts/:id", ({ params }, res) => {
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

// Gets daily workouts and aggresgates into charts 
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;