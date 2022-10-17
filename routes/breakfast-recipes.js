const express = require("express");
const router = express.Router();
const breakfastRecipesController = require("../controllers/breakfast-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all breakfast recipes
router.get("/breakfast-all", ensureAuth, breakfastRecipesController.getAll);

// router to all gluten free breakfast recipes
router.get("/breakfast-gluten-free", ensureAuth, breakfastRecipesController.getGlutenFree);

// router to all vegan breakfast recipes
router.get("/breakfast-vegan", ensureAuth, breakfastRecipesController.getVegan);

// router to all vegetarian breakfast recipes
router.get("/breakfast-vegetarian", ensureAuth, breakfastRecipesController.getVegetarian);

module.exports = router;
