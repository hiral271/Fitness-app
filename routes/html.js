const router = require("express").Router();
const path = require('path');

//page for exercise input view
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

//main page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

//states page for graph 
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router