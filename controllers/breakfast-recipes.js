const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {

    // renders all breakfast recipes
  getAll: async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.render("breakfast-all", {
            recipes: recipes,
            user: req.user
        });
    } catch (err) {
        console.log(err);
    }
  },

  // renders all gluten free breakfast recipes
  getGlutenFree: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("breakfast-gluten-free", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegan breakfast recipes
  getVegan: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("breakfast-vegan", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegetarian breakfast recipes
  getVegetarian: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("breakfast-vegetarian", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
  