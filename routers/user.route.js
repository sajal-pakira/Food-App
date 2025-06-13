const express = require("express");
const { getUserController } = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

//router object
const router = express.Router();

//get user info
router.get("/getUser", authMiddleware, getUserController);

module.exports = router;
