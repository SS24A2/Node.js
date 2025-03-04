const fs = require("fs")

async function getForm(req, res) {
    try {
        const data = await readForm()
        res.status(200).send(data)
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}

function readForm() {
    return new Promise((resolve, reject) => {
        fs.readFile("form.html", "utf-8", (err, data) => {
            if (err) {
                reject(err.message)
            } else {
                resolve(data)
            }
        })
    })
}


async function postData(req, res) {
    if (checkText(req.body.ime) === true || checkText(req.body.prezime) === true) {
        const data = await readForm()
        return res.status(400).send(data + "<p>Nevaliden input, imeto i prezimeto ne moze da sodrzat broevi ili znaci!</p>")
    }
    if (parseInt(req.body.prosek) < 0 || parseInt(req.body.prosek) > 10) {
        const data = await readForm()
        return res.status(400).send(data + "<p>Nevaliden input, prosekot treba da bide vo opseg 0-10!</p>")
    }

    try {
        let data = await readJSON()
        data = JSON.parse(data)
        data.push({ ...req.body, ... { prosek: parseInt(req.body.prosek) } })
        await writeJSON(JSON.stringify(data))
        res.redirect("/studenti")
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}

function checkText(text) {
    let containsSignsOrNums = false
    for (let char of text.split("")) {
        if ([".", ",", ":", ";", "?", "!", "`", "'", '"', "-", " "].includes(char) || parseInt(char) >= 0) {
            containsSignsOrNums = true
        }
    }
    return containsSignsOrNums
}


async function getStudents(req, res) {
    try {
        let data = await readJSON()
        data = JSON.parse(data)
        res.render("index", { data });
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}

async function deleteStudent(req, res) {
    try {
        let data = await readJSON()
        data = JSON.parse(data)
        let indexToDelete = parseInt(req.query.i)
        data.splice(indexToDelete, 1)
        await writeJSON(JSON.stringify(data))
        res.redirect("/studenti")
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}


function readJSON() {
    return new Promise((resolve, reject) => {
        fs.readFile("studenti.json", "utf-8", (err, data) => {
            if (err) {
                reject(err.message)
            } else {
                resolve(data)
            }
        })
    })
}

function writeJSON(dataToWrite) {
    return new Promise((resolve, reject) => {
        fs.writeFile("studenti.json", dataToWrite, (err) => {
            if (err) {
                reject(err.message)
            } else {
                resolve()
            }
        })
    })
}

module.exports = { getForm, postData, getStudents, deleteStudent }