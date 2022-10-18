const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {

    // renders all snack recipes
  getAll: async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.render("snack-all", {
            recipes: recipes,
            user: req.user
        });
    } catch (err) {
        console.log(err);
    }
  },

  // renders all gluten free snack recipes
  getGlutenFree: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("snack-gluten-free", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegan snack recipes
  getVegan: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("snack-vegan", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegetarian snack recipes
  getVegetarian: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("snack-vegetarian", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
  