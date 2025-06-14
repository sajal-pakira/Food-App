const express = require("express");
const {
  getUserController,
  updateUserController,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

//router object
const router = express.Router();

//get user
router.get("/getUser", authMiddleware, getUserController);
//update profile
router.put("/updateUser", authMiddleware, updateUserController);

module.exports = router;
