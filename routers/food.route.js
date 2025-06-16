const express = require("express");
const {
  createFoodController,
  getAllFoodController,
  getFoodByIdController,
  getFoodsByRestaurantIdController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const adminMiddleware = require("../middlewares/admin.middleware");

const router = express.Router();

// POST: Create food
router.post("/create", authMiddleware, createFoodController);

// GET: All food items
router.get("/getAll", getAllFoodController);

// GET: Food by food ID
router.get("/get/:id", getFoodByIdController);

// GET: Foods by restaurant ID
router.get("/getByRestaurant/:restaurantId", getFoodsByRestaurantIdController);

// PUT: Update food by ID
router.put("/update/:id", authMiddleware, updateFoodController);

// DELETE: Delete food by ID
router.delete("/delete/:id", authMiddleware, deleteFoodController);

//place order
router.post("/placeOrder", authMiddleware, placeOrderController);

//order status
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);

module.exports = router;
