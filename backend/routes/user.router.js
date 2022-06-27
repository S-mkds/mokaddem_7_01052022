const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/:id", auth, userCtrl.getOneUser);
router.delete("/:id", auth, userCtrl.deleteOneUser);

module.exports = router;
