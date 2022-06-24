const express = require("express");
const router = express.Router();

const commentsCtrl = require("../controllers/comment.js");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, commentsCtrl.createComment);
router.get("/", auth, commentsCtrl.getAllComments);
router.get("/:id", auth, commentsCtrl.getOneComment);

module.exports = router;
