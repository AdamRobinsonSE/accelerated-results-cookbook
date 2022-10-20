const express = require("express");
const router = express.Router();
const feedRecipesController = require("../controllers/feed-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router to all breakfast recipes
router.get("/all-breakfasts-social", ensureAuth, feedRecipesController.getAllBreakfasts);

// router to all entree recipes
router.get("/all-entrees-social", ensureAuth, feedRecipesController.getAllEntrees);

// router to all dessert recipes
router.get("/all-desserts-social", ensureAuth, feedRecipesController.getAllDesserts);

// router to all side recipes
router.get("/all-sides-social", ensureAuth, feedRecipesController.getAllSides);

// router to all snack recipes
router.get("/all-snacks-social", ensureAuth, feedRecipesController.getAllSnacks);

// router to all drink recipes
router.get("/all-drinks-social", ensureAuth, feedRecipesController.getAllDrinks);

module.exports = router;