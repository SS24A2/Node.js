const express = require("express")

const { getSection } = require("./config/index")
const { allLocations, locationsByID } = require("./handlers/index")

const app = express()

app.get("/locations", allLocations)
app.get("/locations/:id", locationsByID)

app.listen(getSection("location").port, () => console.log(`Server started listening on port ${getSection("location").port}`))