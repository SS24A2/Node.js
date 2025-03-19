const express = require("express");

const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require("./controllers");

const app = express();
app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipe);
app.put("/recipes/:id", updateRecipe);
app.delete("/recipes/:id", deleteRecipe);

app.listen(8080, () => console.log("Server started at port 8080!"));
