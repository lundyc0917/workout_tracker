const router = require('express').Router();
const path = require('path');
const db = require('../models');


// Home page get route
router.get("/", (request, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exercise page get route
router.get("/exercise", (request, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Stats page get route
router.get("/stats", (request, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;