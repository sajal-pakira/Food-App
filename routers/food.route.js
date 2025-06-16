const express = require("express");
const { createFoodController } = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// POST: Create food
router.post("/create", authMiddleware,createFoodController);

module.exports = router;
