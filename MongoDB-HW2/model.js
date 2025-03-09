const mongoose = require('mongoose')

const nutritionSchema = new mongoose.Schema({
    calories: Number,
    fatGrams: Number,
    carbsGrams: Number,
    proteinGrams: Number,
})

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: [String],
    prepTimeMinutes: Number,
    servings: Number,
    nutritionFacts: nutritionSchema,
    createdAt: Date,
    isVegetarian: Boolean,
})

const recipeModel = mongoose.model("Recipe", recipeSchema)

module.exports = recipeModel
