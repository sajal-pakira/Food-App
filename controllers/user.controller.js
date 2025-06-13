const userModel = require("../models/user.model");

//get user info
const getUserController = async (req, res) => {
  try {
    //find user
    const user = userModel.findById({
      _id: req.body.id,
    });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        Message: "User not found",
      });
    }
    res.status(200).send({
      success: true,
      Message: "User get successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      Message: "Error in user API",
      error,
    });
  }
};

module.exports = { getUserController };
