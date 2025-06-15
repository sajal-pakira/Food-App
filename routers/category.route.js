const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createCategoryController,
  getAllCategoryController,
} = require("../controllers/category.controller");

//router object
const router = express.Router();

//create
router.post("/create", authMiddleware, createCategoryController);
//get all categories
router.get("/getAll",getAllCategoryController );

module.exports = router;
