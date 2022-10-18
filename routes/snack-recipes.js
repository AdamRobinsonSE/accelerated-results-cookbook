const express = require("express");
const router = express.Router();
const snackRecipesController = require("../controllers/snack-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all snack recipes
router.get("/snack-all", ensureAuth, snackRecipesController.getAll);

// router to all gluten free snack recipes
router.get("/snack-gluten-free", ensureAuth, snackRecipesController.getGlutenFree);

// router to all vegan snack recipes
router.get("/snack-vegan", ensureAuth, snackRecipesController.getVegan);

// router to all vegetarian snack recipes
router.get("/snack-vegetarian", ensureAuth, snackRecipesController.getVegetarian);

module.exports = router;
