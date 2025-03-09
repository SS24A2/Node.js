const uri = "mongodb+srv://InsertUserName&Password@cluster0.im0jw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const mongoose = require('mongoose')

const recipeModel = require("./model")

const newRecipes = require('./recipes')

mongoose.connect(uri, { dbName: "homework2" })
    .then(() => console.log('Connected!'))
    .catch((err) => console.error(err))


async function crudData() {
    try {
        //***create recipes
        // const recipes = await recipeModel.insertMany(newRecipes, { rawResult: true });
        // console.log(recipes)
        //***read highProteinRecipes (>10g)
        // const highProteinRecipes = await recipeModel.find({"nutritionFacts.proteinGrams":{$gt:10}})
        // console.log(highProteinRecipes)
        //***find recipesWithoutButterAndFlour
        // const recipesWithoutButterAndFlour = await recipeModel.find({$nor: [{ingredients: {$in: ["butter", "flour"]}}]})
        // console.log(recipesWithoutButterAndFlour)
        //***findOneAndUpdate one ingredient
        // const recipeToUpdate = await recipeModel.findOneAndUpdate({_id:"67cd7c5469603d16db3b746d"},{$set:{"ingredients.2":"neutral oil, such as canola or vegetable"}})
        // console.log(recipeToUpdate.ingredients)
        // const updatedRecipe = await recipeModel.findOne({_id:"67cd7c5469603d16db3b746d"})
        // console.log(updatedRecipe.ingredients)
        //***findOneAndDelete (prep time >=120min)
        // const recipeToDelete = await recipeModel.findOneAndDelete({prepTimeMinutes:{$gte:120}})
        // console.log(recipeToDelete)
        //***find recipes with less than 8 ingredients
        // const recipesWithLTEightIngredients = await recipeModel.find({"ingredients.7": {$exists:false}})
        // console.log(recipesWithLTEightIngredients)
        //***updateOne (new ingredient)
        // const recipeUpdate2 = await recipeModel.updateOne({_id:"67cd7c5469603d16db3b7467"},{$set:{title:"Spinach Tomato Tofu Scramble", "ingredients.8":"cherry tomato", "nutritionFacts.calories":250}})
        // console.log(recipeUpdate2)
        //***read sorted recipesByCarbsContent
        // const recipesByCarbsContent = await recipeModel.find().sort({"nutritionFacts.carbsGrams":1})
        // console.log(recipesByCarbsContent)
        //***read recipesVegeWithoutSoyChili 
        // const recipesVegeWithoutSoyChili = await recipeModel.find({$and:[{isVegetarian:true}, {ingredients: {$nin:["soy sauce", "chili"]}}]})
        // console.log(recipesVegeWithoutSoyChili)
        //***deleteMany - vegetarian recipes
        // const deleteRecipes = await recipeModel.deleteMany({isVegetarian: true})
        // console.log(deleteRecipes)
    } catch (err) {
        console.error(err)
    }
}

crudData() 