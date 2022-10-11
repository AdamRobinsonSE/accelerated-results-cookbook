const Grocery = require("../models/Groceries");

module.exports = {

    // Renders the grocery list page
    getGroceries: async (req, res) => {
      try {
        const groceries = await Grocery.find({ user: req.user.id });
        res.render("groceries.ejs", { 
          groceries: groceries, 
          user: req.user 
        });
      } catch (err) {
        console.log(err);
      }
    },

    // Allows the creation of a new grocery item
    addItem: async (req, res) => {
      try {
        const groceries = await Grocery.create({
          groceryItem: req.body.groceryItem,
          user: req.user
        });
        res.redirect("/groceries");
      } catch (err) {
        console.log(err);
      }
    },

    // Allows the creation of a new grocery item from a recipe (this on the recipe page)
    addIngredientName: async (req, res) => {
      try {
        const groceries = await Grocery.create({
          groceryItem: req.params.ingredientName,
          user: req.user
        });
      } catch (err) {
        console.log(err);
      }
    },

    // Allows the deletion of a grocery item (this is on the recipe page)
    deleteIngredientName: async (req, res) => {
      try {
        const groceries = await Grocery.deleteOne({
          groceryItem: req.params.ingredientName,
          user: req.user
        });
      } catch (err) {
        console.log(err);
      }
    },
    
    // Allows the deletion of a grocery item
    deleteItem: async (req, res) => {
      try {
        await Grocery.remove({ _id: req.params.id })
        console.log("Grocery item has been deleted!");
        res.redirect("/groceries");
      } catch (err) {
        console.log(err);
      }
    }

};