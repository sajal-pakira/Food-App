const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { userName, password, email, phone, answer } = req.body;

    //validation
    if (!userName || !password || !email || !phone || !answer) {
      return res.status(500).send({
        success: true,
        message: "Please provide all fields",
      });
    }

    //check if user already exist or not
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email already registered. Please Login",
      });
    }
    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await userModel.create({
      userName,
      password: hashedPassword,
      email,
      phone,
      answer,
    });
    res.status(201).send({
      success: true,
      message: "Successfully registered",
      user,
    });
  } catch (error) {
    console.log("REGISTER ERROR", error);
    res.status(500).send({
      success: false,
      message: "Error in register API",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    //check user is present in database or not
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User not found",
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    //validation
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Wrong credential",
      });
    }
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login succesfull",
      token,
      user,
    });
  } catch (error) {
    console.log("ERROR\n", error);
    res.status(500).send({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};
module.exports = { registerController, loginController };
