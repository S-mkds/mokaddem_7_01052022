const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  commentary: { type: String, required: true },
});

module.exports = mongoose.model("comments", commentSchema);
