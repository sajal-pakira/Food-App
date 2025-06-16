const foodModel = require("../models/food.model");

// Create a food item
const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
      ratingCount,
    } = req.body;

    // Basic validation
    if (!title || !description || !price) {
      return res.status(400).send({
        success: false,
        message: "Title, description, and price are required.",
      });
    }

    const newFood = new foodModel({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
      ratingCount,
    });

    await newFood.save();

    res.status(201).send({
      success: true,
      message: "Food item created successfully",
      food: newFood,
    });
  } catch (error) {
    console.error("Create Food Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in creating food API",
      error: error.message || error,
    });
  }
};

module.exports = {
  createFoodController,
};
