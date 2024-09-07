const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    unqiue: true,
  },
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  state: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Admin",
  },
});
const admin = mongoose.model("Admins", adminSchema);
module.exports = admin;
