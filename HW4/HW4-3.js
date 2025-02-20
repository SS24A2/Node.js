//Response in POSTMAN - POST method

const http = require("http")
const { convertMilesToKm, convertCelsuisToFahrenheit, convertPoundsToKilogram, convertFeetToMetres } = require("./conversion")
const { convertHectareToSquareMeter } = require("./conversion2")

http.createServer((req, res) => {
    if (req.method === "POST") {
        let data = ""
        req.on("data", (chunk) => data += chunk)
        req.on("end", () => {
            const JSObject = JSON.parse(data)
            switch (req.url) {
                case ("/convertMilesToKm"):
                    res.end(`${convertMilesToKm(JSObject.miles)}`);
                    break;
                case ("/convertCelsuisToFahrenheit"):
                    res.end(`${convertCelsuisToFahrenheit(JSObject.celsius)}`);
                    break;
                case ("/convertPoundsToKilogram"):
                    res.end(`${convertPoundsToKilogram(JSObject.pounds)}`);
                    break;
                case ("/convertFeetToMetres"):
                    res.end(`${convertFeetToMetres(JSObject.feet)}`);
                    break;
                case ("/convertHectareToSquareMeter"):
                    res.end(`${convertHectareToSquareMeter(JSObject.hectare)}`);
                    break;
                default:
                    res.end(`Invalid input!`);
            }
        })
    } else {
        res.end("Invalid HTTP method")
    }

}).listen(8082, () => console.log("Server started"))


