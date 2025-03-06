const fs = require("fs")
const { createRecipeObject } = require("./new-recipe-object")
const { checks } = require("./input-checks")

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
    const checkResult = checks(req.body)
    if (checkResult.inputError === true) {
        const data = await readForm()
        return res.status(400).send(data + `<span>${checkResult.message}</span>`)
    }

    try {
        let data = await readJSON()
        data = JSON.parse(data)
        const newRecipe = { id: data.length + 1, ...createRecipeObject(req.body) }
        data.push(newRecipe)
        await writeJSON(JSON.stringify(data))
        res.redirect("/recepti")
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}


async function getRecipes(req, res) {
    try {
        let data = await readJSON()
        data = JSON.parse(data)
        res.render("index", { data });
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}

async function deleteRecipe(req, res) {
    try {
        let data = await readJSON()
        data = JSON.parse(data)
        data = data.filter(object => object.id !== parseInt(req.query.i))
        await writeJSON(JSON.stringify(data))
        res.redirect("/recepti")
    } catch (error) {
        console.error(error)
        res.send("Error!")
    }
}


function readJSON() {
    return new Promise((resolve, reject) => {
        fs.readFile("recepti.json", "utf-8", (err, data) => {
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
        fs.writeFile("recepti.json", dataToWrite, (err) => {
            if (err) {
                reject(err.message)
            } else {
                resolve()
            }
        })
    })
}

module.exports = { getForm, postData, getRecipes, deleteRecipe }