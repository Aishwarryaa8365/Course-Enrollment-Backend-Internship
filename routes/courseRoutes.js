const express = require("express");
const router = express.Router();

const { getCourses, createCourse } = require("../controllers/courseController");

// GET all courses
router.get("/", getCourses);

// POST create course
router.post("/", createCourse);

module.exports = router;
