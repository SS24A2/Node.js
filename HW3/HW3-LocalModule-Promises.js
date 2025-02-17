const fs = require("fs")

//Promises

function writeContent(fileName, dataToWrite) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, dataToWrite, (error) => {
            if (error) {
                reject(`Writing to file failed! ${error.message}`)
            } else {
                resolve(`The file ${fileName} was written successfully!`)
            }
        })
    })
}

function appendContent(fileName, dataToAppend) {
    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, dataToAppend, (error) => {
            if (error) {
                reject(`Adding data to the file failed! ${error.message}`)
            } else {
                resolve(`The data was successfully appended to the file ${fileName}!`);
            }
        })
    })
}

function readContent(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(`File reading failed! ${error.message}`)
            } else {
                resolve(`The file ${fileName} was read successfully! File contents: ${data}`);
            }
        })
    })
}

module.exports = { writeContent, appendContent, readContent }
