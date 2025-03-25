const express = require("express");

const connectToDB = require("./db/config");
connectToDB();

const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require("./handlers/recipes");

const app = express();
app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipe);
app.put("/recipes/:id", updateRecipe);
app.delete("/recipes/:id", deleteRecipe);

app.listen(8081, () => console.log("Server started at port 8081!"));
