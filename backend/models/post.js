const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  commentary: { type: String, required: true },
  imageUrl: { type: String, required: false },
  likes: { type: Number, required: true },
  usersLiked: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("posts", postSchema);
