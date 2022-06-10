const express = require("express");
const router = express.Router();

const postsCtrl = require("../controllers/posts");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, postsCtrl.createPost);
router.get("/", auth, postsCtrl.getAllPosts);
router.get("/:id", auth, postsCtrl.getOnePost);
router.put("/:id", auth, multer, postsCtrl.modifyPost);
router.delete("/:id", auth, postsCtrl.deletePost);
router.post("/:id/like", auth, postsCtrl.likePost);
router.get("/:id/comments", auth, postsCtrl.getPostComments);

module.exports = router;
