const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  commentary: { type: String, required: true },
  rescommentary: { type: String, required: false },
  imageUrl: { type: String, required: false },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: [String], required: true },
  usersDisliked: { type: [String], required: false },
});

module.exports = mongoose.model("posts", postSchema);
