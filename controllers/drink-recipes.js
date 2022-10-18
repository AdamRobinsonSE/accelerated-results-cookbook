const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {

    // renders all drink recipes
  getAll: async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.render("drink-all", {
            recipes: recipes,
            user: req.user
        });
    } catch (err) {
        console.log(err);
    }
  },

  // renders all gluten free drink recipes
  getGlutenFree: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("drink-gluten-free", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegan drink recipes
  getVegan: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("drink-vegan", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },

  // renders all vegetarian drink recipes
  getVegetarian: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("drink-vegetarian", {
        recipes: recipes,
        user: req.user
      });
    } catch (err) {
      console.log(err);
    }
  },
  
};
  