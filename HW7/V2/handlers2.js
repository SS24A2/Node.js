const { writeContent, readContent } = require("./read-write")


async function getData(req, res) {
    const fileName = req.params.fileName
    try {
        const data = await readContent(fileName)
        res.send(data)
    } catch (error) {
        console.error(error)
    }
}

async function postData(req, res) {
    const fileName = req.params.fileName
    const dataToPost = req.body
    try {
        let currentData = await readContent(fileName)
        currentData=await JSON.parse(currentData)
        currentData.push(dataToPost)
        await writeContent(fileName, JSON.stringify(currentData))
        res.send("Data successfully added to file")
    } catch (error) {
        console.error(error)
    }
}

async function updateData(req, res) {
    const fileName = req.params.fileName
    const updatedData = req.body
    const indexToUpdate = parseInt(req.params.bookIndex)
    try {
        let currentData = await readContent(fileName)
        currentData=await JSON.parse(currentData)
        currentData = currentData.map((object, index) => {
            if (index === indexToUpdate) {
                object = { ...object, ...updatedData }
            }
            return object
        })
        await writeContent(fileName, JSON.stringify(currentData))
        res.send("Data successfully updated")
    } catch (error) {
        console.error(error)
    }
}

async function deleteData(req, res) {
    const fileName = req.params.fileName
    const indexToDelete = parseInt(req.params.bookIndex)
    try {
        let currentData = await readContent(fileName)
        currentData = await JSON.parse(currentData)
        currentData.splice(indexToDelete, 1)
        await writeContent(fileName, JSON.stringify(currentData))
        res.send("Data successfully deleted")
    } catch (error) {
        console.error(error)
    }
}

module.exports = { postData, getData, updateData, deleteData }