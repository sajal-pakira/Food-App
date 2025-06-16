const mongoose = require("mongoose");
const categoryModel = require("../models/category.model");

//create category
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

//create category
const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    //validation
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "No categories found",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in create category API",
      error,
    });
  }
};

//update category
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;

    // Check for valid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        message: "Invalid category ID format",
      });
    }

    // Ensure at least one field is being updated
    if (!title && !imageUrl) {
      return res.status(400).send({
        success: false,
        message: "Nothing to update",
      });
    }

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).send({
        success: false,
        message: "No category found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error("Update Category Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in update category API",
      error: error.message || error,
    });
  }
};
//delete category
const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    // Check for valid ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({
        success: false,
        message: "Invalid category ID format",
      });
    }
    const category = await categoryModel.findById(id);
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "No category found with this ID",
      });
    }
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Delete Category Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in delete category API",
      error: error.message || error,
    });
  }
};

module.exports = {
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
