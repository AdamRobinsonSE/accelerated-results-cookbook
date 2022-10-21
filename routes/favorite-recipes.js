const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const favoritesController = require("../controllers/favorite-recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// this is the route for a user to favorite a recipe
router.post("/favoriteRecipe/:id", favoritesController.favoriteRecipe);

// router to the breakfasts page
router.get("/favorite-breakfasts", ensureAuth, favoritesController.getFavoriteBreakfasts);

// router to the entrees page
router.get("/favorite-entrees", ensureAuth, favoritesController.getFavoriteEntrees);

// router to the desserts page
router.get("/favorite-desserts", ensureAuth, favoritesController.getFavoriteDesserts);

// router to the sides page
router.get("/favorite-sides", ensureAuth, favoritesController.getFavoriteSides);

// router to the snacks page
router.get("/favorite-snacks", ensureAuth, favoritesController.getFavoriteSnacks);

// router to the drinks page
router.get("/favorite-drinks", ensureAuth, favoritesController.getFavoriteDrinks);

module.exports = router;
