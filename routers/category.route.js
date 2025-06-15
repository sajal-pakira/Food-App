const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createCategoryController,
} = require("../controllers/category.controller");

//router object
const router = express.Router();

//create
router.post("/create", authMiddleware, createCategoryController);

module.exports = router;
