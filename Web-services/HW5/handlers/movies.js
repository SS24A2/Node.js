const { createMovieNivCheck, updateMovieNivCheck, validateInput } = require("../pkg/movies/niv");
const { get, getOne, create, update, remove } = require("../pkg/movies/movies");

const getMovies = async (req, res) => {
  try {
    const movies = await get(req.auth.id);
    return res.status(200).send(movies);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const createMovie = async (req, res) => {
  try {
    await validateInput(req.body, createMovieNivCheck)
    const data = { ...req.body, userId: req.auth.id }
    const newMovie = await create(data);
    return res.status(201).send(newMovie);
  } catch (err) {
    return res.status(err.code || 500).send(err.message || "Internal Server Error!");
  }
};

const updateMovie = async (req, res) => {
  try {
    await validateInput(req.body, updateMovieNivCheck)

    const movie = await getOne(req.params.id)
    if (!movie) {
      return res.status(400).send("Movie not found!");
    }

    if (movie.userId.toString() === req.auth.id.toString()) {
      const result = await update(req.params.id, req.body);
      return res.status(200).send(result);
    } else {
      return res.status(400).send("No authorisation!");
    }
  } catch (err) {
    return res.status(err.code || 500).send(err.message || "Internal Server Error!");
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await getOne(req.params.id)
    if (!movie) {
      return res.status(400).send("Movie not found!");
    }

    if (movie.userId.toString() === req.auth.id.toString()) {
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
  getMovies, createMovie, updateMovie, deleteMovie
};
