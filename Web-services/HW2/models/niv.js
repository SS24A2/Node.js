const { Validator } = require("node-input-validator")

const createRecipeInputCheck = {
    "recipe.title": ["required", "string", "length:40,3", "regex:^([^0-9]*)$"],
    "recipe.ingredients": "required|array",
    "recipe.ingredients.length": "min:2",
    "recipe.ingredients.*": "required|string|length:40,3",
    "recipe.prepTimeMinutes": "required|integer|min:5",
    "recipe.servings": "required|integer|between:2,20",
    "recipe.nutritionFacts": "required|object",
    "recipe.nutritionFacts.calories": "required|integer|min:0",
    "recipe.nutritionFacts.fatGrams": "required|integer|min:0",
    "recipe.nutritionFacts.carbsGrams": "required|integer|min:0",
    "recipe.nutritionFacts.proteinGrams": "required|integer|min:0",
    "recipe.createdAt": "required|date",
    "recipe.isVegetarian": "required|boolean|in:true,false"
}

const updateRecipeInputCheck = {
    "recipe.title": ["string", "length:40,3", "regex:^([^0-9]*)$"],
    "recipe.ingredients": "array",
    "recipe.ingredients.length": "min:2",
    "recipe.ingredients.*": "string|length:40,3",
    "recipe.prepTimeMinutes": "integer|min:5",
    "recipe.servings": "integer|between:2,20",
    "recipe.nutritionFacts": "object",
    "recipe.nutritionFacts.calories": "integer|min:0",
    "recipe.nutritionFacts.fatGrams": "integer|min:0",
    "recipe.nutritionFacts.carbsGrams": "integer|min:0",
    "recipe.nutritionFacts.proteinGrams": "integer|min:0",
    "recipe.isVegetarian": "boolean|in:true,false"
}

async function validateInput(reqData, rulesObject) {
    const recipeValidator = new Validator(reqData, rulesObject)
    const checkResult = await recipeValidator.check()
    console.log("checkResult", checkResult)
    if (!checkResult) {
        throw { code: 422, message: recipeValidator.errors }
    }
}

module.exports = { createRecipeInputCheck, updateRecipeInputCheck, validateInput }