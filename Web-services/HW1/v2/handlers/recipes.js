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
    await create(req.body);
    return res.status(201).send("Recipe created successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const updateRecipe = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(200).send("Recipe updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
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
