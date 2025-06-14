const bcrypt = require("bcryptjs");

const userModel = require("../models/user.model");

//get user info
const getUserController = async (req, res) => {
  try {
    //find user
    const user = await userModel.findById(req.userId); // ✅ use userId here
    // const user = await userModel.findById({
    //   _id: req.body.id,
    // });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        Message: "User not found",
      });
    }
    // hide password
    user.password = undefined;
    res.status(200).send({
      success: true,
      Message: "User get successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      Message: "Error in get user API",
      error,
    });
  }
};

//update user
const updateUserController = async (req, res) => {
  try {
    //find user
    const user = await userModel.findById(req.userId); // ✅
    // const user = await userModel.findById({ _id: req.body.id });

    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        Message: "User not found",
      });
    }
    //update
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    // save user
    await user.save();
    res.status(200).send({
      success: true,
      Message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      Message: "Error in update user API",
      error,
    });
  }
};

//update password
const updatePasswordController = async (req, res) => {
  try {
    //get user
    const user = await userModel.findById(req.userId);
    //validation
    if (!user) {
      return res.status(500).send({
        success: false,
        Message: "User not found",
      });
    }
    //get data from user
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(404).send({
        success: false,
        Message: "Provide both old and new passwords",
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    //validation
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Wrong old password",
      });
    }
    //hashing newPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(300).send({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      Message: "Error in update password API",
      error,
    });
  }
};

//reset password
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    //validation
    if (!email || !newPassword || !answer) {
      return res.status(404).send({
        success: false,
        Message: "Provide all fields",
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        Message: "User not found or invalid answer",
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      Message: "Password reset successfully",
    });
  } catch (error) {
    console.log("RESET ERROR", error);
    res.status(500).send({
      success: false,
      Message: "Error in password reset API",
    });
  }
};

module.exports = {
  getUserController,
  updateUserController,
  resetPassword,
  updatePasswordController,
};
