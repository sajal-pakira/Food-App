const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category Title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
