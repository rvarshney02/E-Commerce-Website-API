
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(   // it is use to inatance a constructor of mongoose schema class you may use new or not
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
// two methods export and module.export;
