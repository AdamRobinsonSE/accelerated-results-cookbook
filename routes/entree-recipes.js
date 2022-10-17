const express = require("express");
const router = express.Router();
const entreeRecipesController = require("../controllers/entree-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router all entree recipes
router.get("/entree-all", ensureAuth, entreeRecipesController.getAll);

// router to all gluten free entree recipes
router.get("/entree-gluten-free", ensureAuth, entreeRecipesController.getGlutenFree);

// router to all vegan entree recipes
router.get("/entree-vegan", ensureAuth, entreeRecipesController.getVegan);

// router to all vegetarian entree recipes
router.get("/entree-vegetarian", ensureAuth, entreeRecipesController.getVegetarian);

module.exports = router;
