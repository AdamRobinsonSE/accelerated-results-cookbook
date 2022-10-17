const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipesController = require("../controllers/recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router to view the addRecipePage.ejs
router.get("/addRecipePage", ensureAuth, recipesController.addRecipePage);

// takes you to a specific recipe page
router.get("/:id", ensureAuth, recipesController.getRecipe);

// this is the route for the form that allows the creation of a new recipe
router.post("/createRecipe", upload.single("file"), recipesController.createRecipe);

// this is the route for the form that allows you to delete a recipe
router.delete("/deleteRecipe/:id", recipesController.deleteRecipe);

// this is the route for the form that allows you to edit a recipe
router.put("/editRecipe/:id", upload.single("file"), recipesController.editRecipe);

module.exports = router;
