const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");

module.exports = {
  // Renders the user profile page - displaying the form to create a new recipe, as well as showing tables of existing recipes by types
  getProfile: async (req, res) => {
    try {
      const recipes = await Recipe.find({ user: req.user.id });
      res.render("profile.ejs", { 
        recipes: recipes, 
        user: req.user 
      });
    } catch (err) {
      console.log(err);
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
        description: req.body.description,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        prepTime: req.body.prepTime,
        cookTime: req.body.cookTime,
        totalTime: req.body.totalTime,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        specialNotes: req.body.specialNotes,
        user: req.user.id,
      });

      console.log("Recipe has been added!");
      res.redirect("/profile");

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
      // Find recipe by id
      let recipe = await Recipe.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(recipe.cloudinaryId);
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      // Update recipe
      await Recipe.updateOne({ _id: req.params.id }, {
        recipeName: req.body.recipeName,
        type: req.body.type,
        description: req.body.description,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        prepTime: req.body.prepTime,
        cookTime: req.body.cookTime,
        totalTime: req.body.totalTime,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        specialNotes: req.body.specialNotes,
      });
      console.log("Edited Recipe");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
      res.redirect("/post/" + req.params.id);
    }
  }
};
