// Aplikaciski kod
const { convertMilesToKm, convertCelsuisToFahrenheit, convertPoundsToKilogram, convertFeetToMetres } = require("./conversion")
const { convertHectareToSquareMeter } = require("./conversion2")

const handlerMilesToKm = (req, res) => {
    res.send(`${convertMilesToKm(req.body.miles)}`);
}

const handlerCelsuisToFahrenheit = (req, res) => {
    res.send(`${convertCelsuisToFahrenheit(req.body.celsius)}`);
}

const handlerPoundsToKilogram = (req, res) => {
    res.send(`${convertPoundsToKilogram(req.body.pounds)}`);
}

const handlerFeetToMetres = (req, res) => {
    res.send(`${convertFeetToMetres(req.body.feet)}`);
}

const handlerHectareToSquareMeter = (req, res) => {
    res.send(`${convertHectareToSquareMeter(req.body.hectare)}`);
}


module.exports = {
    handlerMilesToKm,
    handlerCelsuisToFahrenheit,
    handlerPoundsToKilogram,
    handlerFeetToMetres,
    handlerHectareToSquareMeter
}