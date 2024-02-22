const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  file: {
    type: String,
    required: [true, "Please provide a file"],
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model("Item", itemSchema);