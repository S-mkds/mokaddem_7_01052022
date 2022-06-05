const mongoose = require("mongoose"); //import mongoose
const uniqueValidator = require("mongoose-unique-validator"); //import MongooseUValidator

// create schema user
const userSchema = mongoose.Schema({
  pseudo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
