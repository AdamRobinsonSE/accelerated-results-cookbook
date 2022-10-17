const Recipe = require("../models/Recipe"); // allows me to referance user in ejs because this modal is connected to the user model

module.exports = {

    // Renders the user profile page - displaying the form to create a new recipe, as well as showing tables of existing recipes by types
    getProfile: async (req, res) => {
        try {
            const recipes = await Recipe.find({ user: req.user.id }).lean();
            res.render("profile.ejs", {
                recipes: recipes,
                user: req.user
            });
        } catch (err) {
            console.log(err);
        }
    }

};