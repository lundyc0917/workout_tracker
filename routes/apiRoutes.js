const db = require("../models");
const router = require("express").Router();

// Add a new exercise
router.put("/api/workouts/:id", (request, res) => {
  db.Workout.findOneAndUpdate(
    { _id: request.params.id },
    { $push: { exercises: request.body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// TODO: Create a new workout


// TODO: Show stats using range

// Create new field for total duration of workouts using $addFields aggregation
router.get('/api/workouts', (request, res) =>{
  db.workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration'},
      }
    }
  ]) .then((dbWorkout) => {
    res.json(dbWorkout);
  }).catch((err) => {
    res.json(err);
  });
});