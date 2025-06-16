const userModel = require("../models/user.model");
module.exports = async (req, res, next) => {
  try {
    
    const user =await userModel.findById(req.userId);
     if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    if (user.userType != "admin") {
      return res.status(403).send({
        success: false,
        message: "Only admin can access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Un-Authorized access",
      error: error.message || error,
    });
  }
};
