function convertMilesToKm(miles) {
    return miles * 1.60934
}

function convertCelsuisToFahrenheit(celsuis) {
    return (celsuis * 9 / 5) + 32
}

function convertPoundsToKilogram(pounds) {
    return pounds * 0.453592
}

function convertFeetToMetres(feet) {
    return feet * 0.3048
}

module.exports = {
    convertMilesToKm,
    convertCelsuisToFahrenheit,
    convertPoundsToKilogram,
    convertFeetToMetres
}

