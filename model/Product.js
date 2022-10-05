const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Must provide product name,"],
    trim: true,
    maxLength: [30, "Name can not be more than 30 characters"],
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
