const { read, write } = require("./read-write");

const getRecipes = async (req, res) => {
  try {
    const recipes = await read("recipes.json");
    return res.status(200).send(recipes);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipes = await read("recipes.json");
    const newRecipe = req.body;
    recipes.push(newRecipe);
    await write("recipes.json", recipes);
    return res.status(201).send("New recipe added!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateRecipe = async (req, res) => {
  try {
    let recipes = await read("recipes.json");
    const recipeId = Number(req.params.id);
    const newData = req.body;

    recipes = recipes.map((recipe, index) => {
      if (index === recipeId) {
        return {
          ...recipe,
          ...newData,
        };
      }

      return recipe;
    });

    await write("recipes.json", recipes);
    return res.status(200).send("Recipe updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipeId = Number(req.params.id);
    let recipes = await read("recipes.json");

    recipes = recipes.filter((_, index) => index !== recipeId);

    await write("recipes.json", recipes);
    return res.status(200).send("Recipe deleted successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getRecipes, createRecipe, updateRecipe, deleteRecipe
};


