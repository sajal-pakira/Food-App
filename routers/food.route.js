const express = require("express");
const {
  createFoodController,
  getAllFoodController,
  getFoodByIdController,
  getFoodsByRestaurantIdController,
  updateFoodController,
  deleteFoodController,
} = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// POST: Create food
router.post("/create", authMiddleware,createFoodController);

// GET: All food items
router.get("/getAll", getAllFoodController);

// GET: Food by food ID
router.get("/get/:id", getFoodByIdController);

// GET: Foods by restaurant ID
router.get("/getByRestaurant/:restaurantId", getFoodsByRestaurantIdController);

// PUT: Update food by ID
router.put("/update/:id", authMiddleware,updateFoodController);

// DELETE: Delete food by ID
router.delete("/delete/:id",authMiddleware ,deleteFoodController);

module.exports = router;
