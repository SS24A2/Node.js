const fs = require("fs")

//Callbacks

function writeContent(fileName, dataToWrite) {
    fs.writeFile(fileName, dataToWrite, (error) => {
        if (error) {
            console.error(`Writing to file failed!`, error.message)
        } else {
            console.log(`The file ${fileName} was written successfully!`);
            readContent(fileName)
        }
    })
}

function appendContent(fileName, dataToAppend) {
    fs.appendFile(fileName, dataToAppend, (error) => {
        if (error) {
            console.error(`Adding data to the file failed!`, error.message)
        } else {
            console.log(`The data was successfully appended to the file ${fileName}!`);
            readContent(fileName)
        }
    })
}

function readContent(fileName) {
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("File reading failed!", error.message)
        } else {
            console.log(`The file ${fileName} was read successfully! File contents: ${data}`)
        }
    })
}

module.exports = { writeContent, appendContent }
