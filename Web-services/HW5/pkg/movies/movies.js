const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  directors: [String],
  writers: [String],
  stars: [String],
  genre: String,
  rating: String,
  releaseDate: Date,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(), 
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  userId:{
    immutable: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
    required: true
  }
})

const movieModel = mongoose.model("Movie", movieSchema)

const get = async (userId) => {
  return await movieModel.find({userId});
};

const getOne = async (id) => {
  return await movieModel.findOne({_id:id});
};

const create = async (data) => {
  return await movieModel.insertOne(data);
};

const update = async (id, data) => {
  return await movieModel.updateOne({ _id: id}, data);
};

const remove = async (id) => {
  return await movieModel.deleteOne({ _id: id });
};

module.exports = {
  get,
  getOne,
  create,
  update,
  remove,
};
