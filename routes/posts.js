const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, postsController.getRecipe);

router.post("/createRecipe", upload.single("file"), postsController.createRecipe);

router.delete("/deleteRecipe/:id", postsController.deleteRecipe);

router.put("/editRecipe/:id", upload.single("file"), postsController.editRecipe);

module.exports = router;
