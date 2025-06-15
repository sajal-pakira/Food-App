const restaurantModel = require("../models/restaurant.model");

//create restaurant
const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isopen,
      logoUrl,
      rating,
      ratingCount,
      code,
      address,
      coords,
    } = req.body;
    //validation
    if (!title || !address) {
      return res.status(500).send({
        success: false,
        message: "Provide title and address",
      });
    }
    const newRestaurant = new restaurantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isopen,
      logoUrl,
      rating,
      ratingCount,
      code,
      address,
      coords,
    });
    await newRestaurant.save();
    res.status(200).send({
      success: true,
      message: "Restaurant created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create restaurant API",
      error,
    });
  }
};

//get all restaurant
const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    if (!restaurants) {
      return res.status(404).send({
        success: false,
        message: "No restaurants available",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all restaurants API",
      error,
    });
  }
};

module.exports = { createRestaurantController, getAllRestaurantController };
