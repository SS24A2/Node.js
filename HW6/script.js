// Infrastrukturen kod
const express = require("express")
const { handlerMilesToKm,
    handlerCelsuisToFahrenheit,
    handlerPoundsToKilogram,
    handlerFeetToMetres,
    handlerHectareToSquareMeter } = require("./handlers")


const server = express()
server.use(express.json())

server.post("/convertMilesToKm", handlerMilesToKm)
server.post("/convertCelsuisToFahrenheit", handlerCelsuisToFahrenheit)
server.post("/convertPoundsToKilogram", handlerPoundsToKilogram)
server.post("/convertFeetToMetres", handlerFeetToMetres)
server.post("/convertHectareToSquareMeter", handlerHectareToSquareMeter)

server.listen(8080, () => console.log("Server started"))
