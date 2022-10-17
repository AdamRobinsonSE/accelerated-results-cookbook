const express = require("express");
const router = express.Router();
const groceriesController = require("../controllers/groceries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// router to the groceries page
router.get("/", ensureAuth, groceriesController.getGroceries);

// router to add a new item to the grocery list
router.post("/addItem", groceriesController.addItem);

// router to delete an item from the grocery list
router.post("/addIngredientName/:ingredientName", groceriesController.addIngredientName);

// router to add an ingredientName from the recipe page to the grocery list
router.post("/deleteIngredientName/:ingredientName", groceriesController.deleteIngredientName);

// router to delete an item from the grocery list
router.delete("/deleteItem/:id", groceriesController.deleteItem);

module.exports = router;
