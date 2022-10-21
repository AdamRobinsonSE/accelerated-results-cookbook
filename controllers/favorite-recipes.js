const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorites");

module.exports = {

  // Allows user to favorite the recipe to be viewed in their favorites page
  favoriteRecipe: async (req, res) => {
    try {
      await Favorite.create({
        user: req.user.id,
        recipe: req.params.id,
      });
      console.log("Favorite has been added!");
      res.redirect(`/recipe/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get to all the favorite breakfasts
  getFavoriteBreakfasts: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-breakfasts", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get to all the favorite entrees
  getFavoriteEntrees: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-entrees", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get to all the favorite desserts
  getFavoriteDesserts: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-desserts", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get all the favorite sides
  getFavoriteSides: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-sides", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get all the favorite snacks
  getFavoriteSnacks: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-snacks", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to get all the favorite drinks
  getFavoriteDrinks: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorite-drinks", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },
  

};
