const { validateInput, createRecipeInputCheck, updateRecipeInputCheck } = require("../models/niv");
const { get, create, update, remove } = require("../models/recipes");

const getRecipes = async (req, res) => {
  try {
    const recipes = await get();
    return res.status(200).send(recipes);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createRecipe = async (req, res) => {
  try {
    await validateInput({ recipe: req.body }, createRecipeInputCheck)
    await create(req.body);
    return res.status(201).send("Recipe created successfully!");
  } catch (err) {
    return res.status(err.code || 500).send(err.message || "Internal Server Error!");
  }
};

const updateRecipe = async (req, res) => {
  try {
    await validateInput({ recipe: req.body }, updateRecipeInputCheck)
    const updateDataPartial = {
      title: req.body.title,
      ingredients: req.body.ingredients,
      prepTimeMinutes: req.body.prepTimeMinutes,
      servings: req.body.servings,
      isVegetarian: req.body.isVegetarian,
    }
    const updateData = (!req.body.nutritionFacts)
      ? updateDataPartial
      : {
        ...updateDataPartial,
        "nutritionFacts.calories": req.body.nutritionFacts.calories,
        "nutritionFacts.fatGrams": req.body.nutritionFacts.fatGrams,
        "nutritionFacts.carbsGrams": req.body.nutritionFacts.carbsGrams,
        "nutritionFacts.proteinGrams": req.body.nutritionFacts.proteinGrams
      }

    await update(req.params.id, updateData);
    return res.status(200).send("Recipe updated successfully!");
  } catch (err) {
    return res.status(err.code || 500).send(err.message || "Internal Server Error!");
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Recipe removed successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getRecipes, createRecipe, updateRecipe, deleteRecipe
};
