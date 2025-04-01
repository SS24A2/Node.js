const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
  calories: Number,
  fatGrams: Number,
  carbsGrams: Number,
  proteinGrams: Number,
}, {
  _id: false,
})

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  prepTimeMinutes: Number,
  servings: Number,
  nutritionFacts: nutritionSchema,
  createdAt: Date,
  isVegetarian: Boolean,
  userId:{
    immutable: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
  }
})

const recipeModel = mongoose.model("Recipe", recipeSchema)

const get = async (userId) => {
  return await recipeModel.find({userId});
};

const getOne = async (id) => {
  return await recipeModel.findOne({_id:id});
};

const create = async (data) => {
  return await recipeModel.insertOne(data);
};

const update = async (id, data) => {
  return await recipeModel.updateOne({ _id: id}, data);
};

const remove = async (id) => {
  return await recipeModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  getOne,
  create,
  update,
  remove,
};
