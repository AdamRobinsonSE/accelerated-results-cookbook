const express = require("express");
const router = express.Router();
const drinkRecipesController = require("../controllers/drink-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all drink recipes
router.get("/drink-all", ensureAuth, drinkRecipesController.getAll);

// router to all gluten free drink recipes
router.get("/drink-gluten-free", ensureAuth, drinkRecipesController.getGlutenFree);

// router to all vegan drink recipes
router.get("/drink-vegan", ensureAuth, drinkRecipesController.getVegan);

// router to all vegetarian drink recipes
router.get("/drink-vegetarian", ensureAuth, drinkRecipesController.getVegetarian);

module.exports = router;
