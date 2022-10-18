const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {

    // renders all side recipes
  getAll: async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.render("side-all", {
            recipes: recipes,
            user: req.user
        });
    } catch (err) {
        console.log(err);
    }
  },

  // renders all gluten free side recipes
  getGlutenFree: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("side-gluten-free", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegan side recipes
  getVegan: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("side-vegan", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegetarian side recipes
  getVegetarian: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("side-vegetarian", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
  