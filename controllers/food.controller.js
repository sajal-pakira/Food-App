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

// Get all food items
const getAllFoodController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res.status(404).send({
        success: false,
        message: "No food found",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: foods.length,
      foods,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting all foods API",
      error: error.message || error,
    });
  }
};

// Get food by its own ID
const getFoodByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id).populate("restaurant");

    if (!food) {
      return res.status(404).send({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).send({
      success: true,
      food,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error while fetching food by ID",
      error,
    });
  }
};

// Get food items by restaurant ID
const getFoodsByRestaurantIdController = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const foods = await foodModel.find({ restaurant: restaurantId });

    if (!foods || foods.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No foods found for this restaurant",
      });
    }

    res.status(200).send({
      success: true,
      foods,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in getting food by restaurant ID",
      error,
    });
  }
};

// Update a food item
const updateFoodController = async (req, res) => {
  try {
    const { id } = req.params;
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

    if (!id) {
      return res.status(404).send({
        success: false,
        message: "food id not found",
      });
    }
    const updatedFood = await foodModel.findByIdAndUpdate(
      id,
      {
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
      },
      {
        new: true,
      }
    );

    if (!updatedFood) {
      return res.status(404).send({
        success: false,
        message: "Food item not found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Food item updated successfully",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating food API",
      error,
    });
  }
};

// Delete a food item
const deleteFoodController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFood = await foodModel.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).send({
        success: false,
        message: "Food item not found with this ID",
      });
    }

    res.status(200).send({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in deleting food API",
      error: error.message || error,
    });
  }
};

module.exports = {
  createFoodController,
  getAllFoodController,
  getFoodByIdController,
  getFoodsByRestaurantIdController,
  updateFoodController,
  deleteFoodController,
};
