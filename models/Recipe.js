const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Breakfast', 'Entrée', 'Side', 'Snack', 'Drink', 'Dessert'],
    required: true
  },
  vegan: {
    type: Boolean,
    enum: [true, false],
    required: true
  },
  vegetarian: {
    type: Boolean,
    enum: [true, false],
    required: true,
  },
  glutenFree: {
    type: Boolean,
    enum: [true, false],
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  prepTime: {
    type: String,
  },
  bakeOrCookTime: {
    type: String,
  },
  totalTime: {
    type: String,
  },
  ingredientAmount: {
    type: Array,
  },
  ingredientUnit: {
    type: Array,
  },
  ingredientName: {
    type: Array,
  },
  ingredientInstructions: {
    type: Array,
  },
  directions: {
    type: Array,
  },
  specialNotes: {
    type: String,
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
