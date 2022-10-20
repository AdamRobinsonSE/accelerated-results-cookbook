const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

module.exports = {

  // renders all breakfast recipes
  getAllBreakfasts: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-breakfasts-social", { 
            recipes: recipes,
            user: user
        });
      } catch (err) {
        console.log(err);
      }
  },

  // renders all entree recipes
  getAllEntrees: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-entrees-social", { 
            recipes: recipes,
            user: user  
        });
      } catch (err) {
        console.log(err);
      }
  },

  // renders all dessert recipes
  getAllDesserts: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-desserts-social", { 
            recipes: recipes,
            user: user
        });
      } catch (err) {
        console.log(err);
      }
  },
  
  // renders all sides recipes
  getAllSides: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-sides-social", { 
            recipes: recipes,
            user: user
        });
      } catch (err) {
        console.log(err);
      }
  },

  // renders all snack recipes
  getAllSnacks: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-snacks-social", { 
            recipes: recipes,
            user: user
        });
      } catch (err) {
        console.log(err);
      }
  },

  // renders all drink recipes
  getAllDrinks: async (req, res) => {
    try {
        const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
        const user = await User.findById(req.user.id)
        res.render("all-drinks-social", { 
            recipes: recipes,
            user: user
        });
      } catch (err) {
        console.log(err);
      }
  },
  
};
  