const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Breakfast', 'Entrée', 'Dessert', 'Vegan', 'Vegetarian'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  prepTime: {
    type: String,
    required: true,
  },
  cookTime: {
    type: String,
    required: true,
  },
  totalTime: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  directions: {
    type: Array,
    required: true
  },
  specialNotes: {
    type: String,
    required: true,
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

module.exports = mongoose.model("Recipe", RecipeSchema);
