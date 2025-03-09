const newRecipes = [
    {
        title: "Chocolate Banana Bread",
        ingredients: ["bananas", "butter", "sugar", "salt", "egg", "vanilla", "flour", "cocoa powder", "baking soda", "chocolate chips"],
        prepTimeMinutes: 75,
        servings: 12,
        nutritionFacts: {
            calories: 215,
            fatGrams: 8,
            carbsGrams: 35,
            proteinGrams: 3,
        },
        createdAt: new Date,
        isVegetarian: false,
    },
    {
        title: "Spinach Tofu Scramble",
        ingredients: ["olive oil", "onion", "tofu", "salt", "black pepper", "turmeric", "spinach", "lemon juice"],
        prepTimeMinutes: 15,
        servings: 3,
        nutritionFacts: {
            calories: 241,
            fatGrams: 13,
            carbsGrams: 15,
            proteinGrams: 23,
        },
        createdAt: new Date,
        isVegetarian: true,
    },
    {
        title: "Sesame Peanut Noodles",
        ingredients: ["rice noodles", "sesame oil", "peanut butter", "soy sauce", "honey", "rice vinegar", "garlic"],
        prepTimeMinutes: 20,
        servings: 4,
        nutritionFacts: {
            calories: 226,
            fatGrams: 13,
            carbsGrams: 22,
            proteinGrams: 7,
        },
        createdAt: new Date,
        isVegetarian: true,
    },
    {
        title: "Buckwheat Pancakes",
        ingredients: ["buckwheat flour", "all-purpose flour", "sugar", "salt", "baking soda", "egg", "buttermilk", "butter", "vegetable oil"],
        prepTimeMinutes: 25,
        servings: 4,
        nutritionFacts: {
            calories: 385,
            fatGrams: 15,
            carbsGrams: 52,
            proteinGrams: 11,
        },
        createdAt: new Date,
        isVegetarian: false,
    },
    {
        title: "Homemade Cosmic Brownies",
        ingredients: ["butter", "cocoa powder", "neutral oil", "bittersweet chocolate", "sugar", "eggs", "vanilla extract", "all-purpose flour", "baking powder", "kosher salt", "heavy cream", "Candy-coated chocolate chip sprinkles"],
        prepTimeMinutes: 140,
        servings: 16,
        nutritionFacts: {
            calories: 248,
            fatGrams: 18,
            carbsGrams: 20,
            proteinGrams: 3,
        },
        createdAt: new Date,
        isVegetarian: false,
    }
]

module.exports = newRecipes