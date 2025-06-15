const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createRestaurantController,
  getAllRestaurantController,
} = require("../controllers/restaurant.controller");

//router object
const router = express.Router();

//create restaurant
router.post("/create", authMiddleware, createRestaurantController);
//get all restaurants
router.get("/getAll", getAllRestaurantController);

module.exports = router;
