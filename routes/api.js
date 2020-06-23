const router = require("express").Router();
const Workout = require("../models/workout.js");

// // Read last workout 
router.get("/api/workouts", (req, res) => {
//   // Workout.find({})
//   //   .sort({ date: -1 })
//   //   .then(dbWorkout => {
//   //     res.json(dbWorkout);
//   //   })
//   //   .catch(err => {
//   //     res.status(400).json(err);
//   //   });
});

// // Add an exercise 
router.put("/workouts/:id", ({ params }, res) => {
//   // db.books.update(
//   //   {
//   //     _id: mongojs.ObjectId(params.id)
//   //   },
//   //   {
//   //     $set: {
//   //       read: true
//   //     }
//   //   },

//   //   (error, edited) => {
//   //     if (error) {
//   //       console.log(error);
//   //       res.send(error);
//   //     } else {
//   //       console.log(edited);
//   //       res.send(edited);
//   //     }
//   //   }
//   // );
});

// Create a new workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log("Create a new workout")
  // Workout.create(body)
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

// Get workouts in range 
  router.post("/api/workouts/range", ({ body }, res) => {
  //   // Workout.insertMany(body)
  //   //   .then(dbWorkout => {
  //   //     res.json(dbWorkout);
  //   //   })
  //   //   .catch(err => {
  //   //     res.status(400).json(err);
  //   //   });
  });
  








module.exports = router;