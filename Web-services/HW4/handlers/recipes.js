const { validateInput, createRecipeInputCheck, updateRecipeInputCheck } = require("../pkg/models/niv");
const { get, getOne, create, update, remove } = require("../pkg/models/recipes");

const getRecipes = async (req, res) => {
  try {
    const recipes = await get(req.auth.id);
    return res.status(200).send(recipes);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createRecipe = async (req, res) => {
  try {
    await validateInput({ recipe: req.body }, createRecipeInputCheck)
    const data = {...req.body, userId:req.auth.id}
    const result = await create(data);
    return res.status(201).send(result);
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

    const recipe = await getOne (req.params.id)

    if (!recipe) {
      return res.status(400).send("Recipe not found!");
    }
    
    if (recipe.userId.toString() === req.auth.id.toString()){
      const result = await update(req.params.id, updateData);
      return res.status(200).send(result);
    } else {
      return res.status(400).send("No authorisation!");
    }
   
  } catch (err) {
    return res.status(err.code || 500).send(err.message || "Internal Server Error!");
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await getOne (req.params.id)

    if (!recipe) {
      return res.status(400).send("Recipe not found!");
    }

    if (recipe.userId.toString() === req.auth.id.toString()){
      const result = await remove(req.params.id);
      return res.status(200).send(result);
    } else {
      return res.status(400).send("No authorisation!");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getRecipes, createRecipe, updateRecipe, deleteRecipe
};
