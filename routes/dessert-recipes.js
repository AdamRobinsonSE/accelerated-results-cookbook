const express = require("express");
const router = express.Router();
const dessertRecipesController = require("../controllers/dessert-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all dessert recipes
router.get("/dessert-all", ensureAuth, dessertRecipesController.getAll);

// router to all gluten free dessert recipes
router.get("/dessert-gluten-free", ensureAuth, dessertRecipesController.getGlutenFree);

// router to all vegan dessert recipes
router.get("/dessert-vegan", ensureAuth, dessertRecipesController.getVegan);

// router to all vegetarian dessert recipes
router.get("/dessert-vegetarian", ensureAuth, dessertRecipesController.getVegetarian);

module.exports = router;
