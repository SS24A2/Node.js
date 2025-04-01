const { Validator } = require("node-input-validator")

const AccountLogin = {
    email: "required|email",
    password: "required|string",
};

const createMovieNivCheck = {
    title: "required|string",
    directors: "required|array",
    writers: "required|array",
    stars: "required|array",
    genre: "required|string",
    rating: "required|string",
    releaseDate: "required|date",
}

const updateMovieNivCheck = {
    title: "string",
    directors: "array",
    writers: "array",
    stars: "array",
    genre: "string",
    rating: "string",
    releaseDate: "date",
}

async function validateInput(reqData, rulesObject) {
    const movieValidator = new Validator(reqData, rulesObject)
    const checkResult = await movieValidator.check()

    if (!checkResult) {
        throw { code: 422, message: movieValidator.errors }
    }
}

module.exports = { createMovieNivCheck, updateMovieNivCheck, validateInput }