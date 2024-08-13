const { List } = require("@mantine/core");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
  userType: String,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
