const JWt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  try {
    //get token
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Authorization token missing",
      });
    }
    JWt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(404).send({
          success: false,
          message: "Un-Authorized User",
        });
      } else {
        // req.body.id = decode.id;
        req.userId = decode.id; // ✅ safe and does not depend on request method
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
