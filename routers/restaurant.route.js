const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController,
} = require("../controllers/restaurant.controller");

//router object
const router = express.Router();

//create restaurant
router.post("/create", authMiddleware, createRestaurantController);
//get all restaurants
router.get("/getAll", getAllRestaurantController);
//get restaurant by id
router.get("/get/:id", getRestaurantByIdController);
//delete restaurant
router.delete("/delete/:id", authMiddleware, deleteRestaurantController);

module.exports = router;
