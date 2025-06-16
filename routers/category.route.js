const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createCategoryController,
  getAllCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controllers/category.controller");

//router object
const router = express.Router();

//create
router.post("/create", authMiddleware, createCategoryController);
//get all categories
router.get("/getAll", getAllCategoryController);
//update category
router.put("/update/:id", authMiddleware, updateCategoryController);
//delete category
router.delete("/delete/:id", authMiddleware, deleteCategoryController);

module.exports = router;
