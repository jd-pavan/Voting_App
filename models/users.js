const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
    unqiue: true,
  },
  //   isVerfied: {
  //   type:String,
  // required:true},
  //   otp: {
  //   type:String,
  // required:true},
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  addhara_no: {
    type: Number,
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
  isVoted: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: "Voter",
  },
});
const user = mongoose.model("User", userSchema);
module.exports = user;
