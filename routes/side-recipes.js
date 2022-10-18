const express = require("express");
const router = express.Router();
const sideRecipesController = require("../controllers/side-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all side recipes
router.get("/side-all", ensureAuth, sideRecipesController.getAll);

// router to all gluten free side recipes
router.get("/side-gluten-free", ensureAuth, sideRecipesController.getGlutenFree);

// router to all vegan side recipes
router.get("/side-vegan", ensureAuth, sideRecipesController.getVegan);

// router to all vegetarian side recipes
router.get("/side-vegetarian", ensureAuth, sideRecipesController.getVegetarian);

module.exports = router;
