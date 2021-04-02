const db = require("../models");
const router = require("express").Router();

// TODO: Add a new exercise
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