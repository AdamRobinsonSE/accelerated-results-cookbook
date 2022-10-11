const express = require("express");
const router = express.Router();
const groceriesController = require("../controllers/groceries");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, groceriesController.getGroceries);

router.post("/addItem", groceriesController.addItem);

router.post("/addIngredientName/:ingredientName", groceriesController.addIngredientName);

router.post("/deleteIngredientName/:ingredientName", groceriesController.deleteIngredientName);

router.delete("/deleteItem/:id", groceriesController.deleteItem);

module.exports = router;
