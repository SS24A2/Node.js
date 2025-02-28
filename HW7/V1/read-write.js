const fs = require("fs")

function writeContent(fileName, dataToWrite) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, dataToWrite, (error) => {
            if (error) {
                reject(`Writing to file failed! ${error.message}`)
            } else {
                resolve()
            }
        })
    })
}

//dataToWrite - JS object

function readContent(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(`File reading failed! ${error.message}`)
            } else {
                resolve(data);
            }
        })
    })
}

// data - JSON

module.exports = { writeContent, readContent }
