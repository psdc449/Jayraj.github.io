const express = require("express");
const router = express.Router();
const usercontrol = require("../controller/user.control");
const { auth, admin } = require("../middleware/user.auth");

router.post("/register", usercontrol.register);
router.post("/login", usercontrol.login);

module.exports = router;
