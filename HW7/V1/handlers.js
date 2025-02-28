const { writeContent, readContent } = require("./read-write")

async function getData(fileName) {
    try {
        const data = await readContent(fileName)
        return data
    } catch (error) {
        console.error(error)
    }
}

async function postData(fileName, dataToPost) {
    try {
        let currentData = await getData(fileName)
        currentData = await JSON.parse(currentData)
        currentData.push(dataToPost)
        await writeContent(fileName, JSON.stringify(currentData))
        console.log("Data successfully added to file")
    } catch (error) {
        console.error(error)
    }
}

async function updateData(fileName, updatedData, indexToUpdate) {
    try {
        let currentData = await getData(fileName)
        currentData = await JSON.parse(currentData)
        currentData = currentData.map((object, index) => {
            if (index === indexToUpdate) {
                object = { ...object, ...updatedData }
            }
            return object
        })
        await writeContent(fileName, JSON.stringify(currentData))
        console.log("Data successfully updated")
    } catch (error) {
        console.error(error)
    }
}

async function deleteData(fileName, indexToDelete) {
    try {
        let currentData = await getData(fileName)
        currentData = await JSON.parse(currentData)
        currentData.splice(indexToDelete, 1)
        await writeContent(fileName, JSON.stringify(currentData))
        console.log("Data successfully deleted")
    } catch (error) {
        console.error(error)
    }
}

module.exports = { postData, getData, updateData, deleteData }