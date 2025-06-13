const JWt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    //get token
    const token = req.headers["Authorization"].split(" ")[1];
    JWt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(404).send({
          success: false,
          message: "Un-Authorized User",
        });
      } else {
        req.body.id = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "ERROR in Auth middleware",
      error,
    });
  }
};
