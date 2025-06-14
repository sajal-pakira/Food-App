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
module.exports = { getUserController, updateUserController };
