
function createRecipeObject(body) {
    // req.body without empty inputs
    let modifBody = {}
    for (let key of Object.keys(body)) {
        if (body[key] !== "") {
            modifBody[key] = body[key]
        }
    }
    // create recipe.ingredients object
    let ingredientsObject = {}
    const keys = []
    const values = []
    for (let key of Object.keys(modifBody)) {
        if (key.slice(0, 10) === 'ingredient' && key.slice(-8) !== "Quantity") {
            let value = modifBody[key].trim()
            let valueNew = value.replace(/\s+/g, "-")
            keys.push(valueNew)
        }
        if (key.slice(0, 10) === 'ingredient' && key.slice(-8) === "Quantity") {
            let value = modifBody[key].replace(/\s+/g, " ")
            values.push(value.trim())
        }
    }
    keys.forEach((key, index) => {
        ingredientsObject[key] = values[index]
    })

    // create recipe.method object
    let stepsObject = {}
    const stepKeys = ["firstStep", "secondStep", "thirdStep", "fourthStep", "fifthStep", "sixthStep", "seventhStep", "eighthStep", "ninthStep", "tenthStep"]
    const stepValues = []

    for (let key of Object.keys(modifBody)) {
        if (key.slice(0, 4) === 'step') {
            let value = modifBody[key].replace(/\s+/g, " ")
            stepValues.push(value.trim())
        }
    }

    stepValues.forEach((value, index) => {
        stepsObject[stepKeys[index]] = value
    })

    let recipeName = modifBody.recipe.replace(/\s+/g, " ")
    const newRecipe = {
        recipe: recipeName.trim(),
        ingredients: ingredientsObject,
        method: stepsObject
    }

    return newRecipe
}

module.exports = { createRecipeObject }

