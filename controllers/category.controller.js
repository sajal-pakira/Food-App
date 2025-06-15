const categoryModel = require("../models/category.model");

const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    //validation
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "Please provide category title",
      });
    }
    const newCategory = new categoryModel({
      title,
      imageUrl,
    });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in create category API",
      error,
    });
  }
};

module.exports = { createCategoryController };
