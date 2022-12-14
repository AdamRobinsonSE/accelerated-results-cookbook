const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const path = require("path");
const mainRoutes = require("./routes/main");
const profileRoutes = require("./routes/profile");
const recipeRoutes = require("./routes/recipes");
const groceriesRoutes = require("./routes/groceries");
const breakfastRecipes = require("./routes/breakfast-recipes");
const entreeRecipes = require("./routes/entree-recipes");
const dessertRecipes = require("./routes/dessert-recipes");
const sideRecipes = require("./routes/side-recipes");
const snackRecipes = require("./routes/snack-recipes");
const drinkRecipes = require("./routes/drink-recipes");
const feedRecipes = require("./routes/feed-recipes");
const favoriteRecipes = require("./routes/favorite-recipes");


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");
app.set('views', [path.join(__dirname, 'views'),
                  path.join(__dirname, 'views/user-recipes/'),
                  path.join(__dirname, 'views/feed/'),
                  path.join(__dirname, 'views/favorite-recipes/'),
                  path.join(__dirname, 'views/login-signup'),
                  path.join(__dirname, 'views/add-recipe'),
                  path.join(__dirname, 'views/profile'),
                  path.join(__dirname, 'views/groceries'),
                  path.join(__dirname, 'views/recipes'),]);

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/recipes", recipeRoutes);
app.use("/groceries", groceriesRoutes);
app.use("/profile", profileRoutes);
app.use("/breakfast-recipes", breakfastRecipes);
app.use("/entree-recipes", entreeRecipes);
app.use("/dessert-recipes", dessertRecipes);
app.use("/side-recipes", sideRecipes);
app.use("/snack-recipes", snackRecipes);
app.use("/drink-recipes", drinkRecipes);
app.use("/feed-recipes", feedRecipes);
app.use("/favorite-recipes", favoriteRecipes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
