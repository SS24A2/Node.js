const { getAllLocations, getLocationsByID } = require("../API/index")

const allLocations = async (req, res) => {
    try {
        const data = await getAllLocations(req.query.page)
        return res.status(200).send(data)
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    }
}

const locationsByID = async (req, res) => {
    try {
        const data = await getLocationsByID(req.params.id)
        return res.status(200).send(data)
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    }
}

module.exports = {
    allLocations,
    locationsByID,
}