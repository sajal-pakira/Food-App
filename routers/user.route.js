const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

//router object
const router = express.Router();

//get user
router.get("/getUser", authMiddleware, getUserController);
//update profile
router.put("/updateUser", authMiddleware, updateUserController);
//update password
router.post("/updatePassword", authMiddleware, updatePasswordController);
//reset password
router.post("/resetPassword", authMiddleware, resetPasswordController);
//delete user profile
router.delete("/deleteProfile/:id", deleteProfileController);

module.exports = router;
