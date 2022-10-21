const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorites");

module.exports = {

  // addRecipePage method to view the addRecipePage.ejs file
  addRecipePage: (req, res) => {
    try {
      res.render("addRecipePage", {
        user : req.user
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Takes user to a page that shows all the details of a recipe
  getRecipe: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      res.render("recipe.ejs", { 
        recipe: recipe, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

  // Allows the creation of a new recipe
  createRecipe: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Recipe.create({
        recipeName: req.body.recipeName,
        type: req.body.type,
        vegan: req.body.vegan,
        vegetarian: req.body.vegetarian,
        glutenFree: req.body.glutenFree,
        description: req.body.description,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        prepTime: req.body.prepTime,
        bakeOrCookTime: req.body.bakeOrCookTime,
        totalTime: req.body.totalTime,
        ingredientAmount: req.body.ingredientAmount,
        ingredientUnit: req.body.ingredientUnit,
        ingredientName: req.body.ingredientName,
        ingredientInstructions: req.body.ingredientInstructions,
        directions: req.body.directions,
        specialNotes: req.body.specialNotes,
        user: req.user.id,
      });

      console.log("Recipe has been added!");
      const recipe = await Recipe.findOne({ recipeName: req.body.recipeName });
      res.redirect(`/recipes/${recipe.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  
  // Allows the deletion of a recipe
  deleteRecipe: async (req, res) => {
    try {
      // Find post by id
      let recipe = await Recipe.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(recipe.cloudinaryId);
      // Delete post from db
      await Recipe.remove({ _id: req.params.id });
      console.log("Deleted Recipe");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },

  // Allows the editing of a recipe
  editRecipe: async (req, res) => {
    try {
      let recipe = await Recipe.findById({ _id: req.params.id });
      if (req.file) {
        await cloudinary.uploader.destroy(recipe.cloudinaryId);
        const result = await cloudinary.uploader.upload(req.file.path);
        recipe.image = result.secure_url;
        recipe.cloudinaryId = result.public_id;
      }
      recipe.recipeName = req.body.recipeName;
      recipe.type = req.body.type;
      recipe.vegan = req.body.vegan;
      recipe.vegetarian = req.body.vegetarian;
      recipe.glutenFree = req.body.glutenFree;
      recipe.description = req.body.description;
      recipe.prepTime = req.body.prepTime;
      recipe.bakeOrCookTime = req.body.bakeOrCookTime;
      recipe.totalTime = req.body.totalTime;
      recipe.ingredientAmount = req.body.ingredientAmount;
      recipe.ingredientUnit = req.body.ingredientUnit;
      recipe.ingredientName = req.body.ingredientName;
      recipe.ingredientInstructions = req.body.ingredientInstructions;
      recipe.directions = req.body.directions;
      recipe.specialNotes = req.body.specialNotes;
      recipe.user = req.user.id;
      
      await recipe.save();
      console.log("Edited Recipe");
      res.redirect("/recipes/" + req.params.id);
    } catch (err) {
      console.log(err);
      res.redirect("/recipes/" + req.params.id);
    }
  },

  // Allows user to favorite the recipe
  favoriteRecipe: async (req, res) => {
    try {
      await Favorite.create({
        user: req.user.id,
        recipe: req.params.id,
      });
      console.log("Favorite has been added!");
      res.redirect(`/recipes/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },

  // Allows user to unfavorite the recipe
  getFavorites: async (req, res) => { 
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate('recipe');
      res.render("favorites.ejs", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
    }
  },

};
