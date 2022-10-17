const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {

    // renders all entrees recipes
  getAll: async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.render("entree-all", {
            recipes: recipes,
            user: req.user
        });
    } catch (err) {
        console.log(err);
    }
  },

  // renders all gluten free entrees recipes
  getGlutenFree: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("entree-gluten-free", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegan entrees recipes
  getVegan: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("entree-vegan", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegetarian entrees recipes
  getVegetarian: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("entree-vegetarian", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
  