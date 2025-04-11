const { getSection } = require("../config/index")

const CACHE = {}

const getAllLocations = async (page) => {
    const URL = `${getSection("location").base_URL}/?page=${page}`

    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data

    } catch (err) {
        throw err
    }
}

const getLocationsByID = async (ID) => {
    let timeNow = new Date().getTime() / 1000;
    console.log("NOW", timeNow)
    const URL = `${getSection("location").base_URL}/${ID}`

    if (CACHE[ID] && timeNow < CACHE[ID].timeCached + getSection("location").cache_expiry) {
        console.log("FROM cache", CACHE)
        return CACHE[ID].data
    }

    try {
        const response = await fetch(URL)
        const data = await response.json()
        CACHE[ID] = {
            timeCached: new Date().getTime() / 1000,
            data: data
        }
        console.log("TO cache", CACHE)
        return data

    } catch (err) {
        throw err
    }

}

module.exports = {
    getAllLocations,
    getLocationsByID,
}

