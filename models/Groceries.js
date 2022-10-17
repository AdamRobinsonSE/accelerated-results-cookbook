const mongoose = require("mongoose");

const GroceriesSchema = new mongoose.Schema({
  groceryItem: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Groceries", GroceriesSchema, "groceries");