const express = require("express");
const testUserController = require("../controllers/test.controller");

//router object
const router = express.Router();

router.get("/test-user", testUserController);

module.exports = router;
