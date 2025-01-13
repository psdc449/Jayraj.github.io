const express = require("express");
const router = express.Router();
const usercontrol = require("../controller/user.control");
const { auth, admin } = require("../middleware/user.auth");


router.post("/register", usercontrol.register);
router.post("/login", auth, usercontrol.login);
router.get("/single", auth, usercontrol.single);
router.get("/all", auth, admin, usercontrol.all);
router.patch("/update", auth, admin, usercontrol.update);
router.delete("/delete", auth, admin, usercontrol.delete);

module.exports = router;