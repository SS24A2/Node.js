const fs = require("fs")
const {calculateParam1, calculateParam2, calculateParam3, calculateParam4, calculateParam5, calculateParam6, calculateParam7} = require ("./calculations")

async function getData(req, res) {
    try {
        const data = await readForm()
        res.status(200).send(data)
    } catch (err) {
        console.error(err)
        res.send("Error! File reading failed!")
    }
}

async function postData(req, res) {
    try {
        const {text} = req.body
        const anaysisData = {
            text: text, 
            param1:calculateParam1(text),
            param2: calculateParam2(text),
            param3:calculateParam3(text),
            param4: calculateParam4(text),
            param5:calculateParam5(text),
            param6:calculateParam6(text),
            param7:calculateParam7(text),
        }
        const data = await readResult(anaysisData)
        res.status(200).send(data)
    } catch (err) {
        console.error(err)
        res.send("Error! File reading failed!")  
    }
}

async function readForm() {
    return new Promise((resolve, reject) => {
        fs.readFile("form.html", "utf-8", (err, data) => {
            if (err) {
                reject(`File reading failed! ${err.message}`)
            } else {
                resolve(data)
            }
        })
    })
}

async function readResult(anaysisData) {
    return new Promise((resolve, reject) => {
        fs.readFile("result.html", "utf-8", (err, data) => {
            if (err) {
                reject(`File reading failed! ${err.message}`)
            } else {
                for (let parameter in anaysisData){
                    data=data.replace(`{{${parameter}}}`, anaysisData[parameter])
                }
                resolve(data)
            }
        })
    })
}

module.exports = { getData, postData } 

