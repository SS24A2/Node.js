function checks(body) {
    let message
    let inputError = false
    let keyArray = Object.keys(body)

    for (let key of keyArray) {
        if (key.slice(0, 4) === "step" && body[key] !== "") {
            let stepNum = parseInt(key.slice(4))
            if (body[`step${stepNum - 1}`] === "") {
                message = "The recipe steps should be written by order without skipping input fields!"
                inputError = true
            }
        }
        if (key.slice(0, 10) === 'ingredient' && key.slice(-8) !== "Quantity" && body[key] !== "") {
            let ingredientNum = parseInt(key.slice(10))
            if (body[`ingredient${ingredientNum - 1}`] === "") {
                message = "The ingredients should be written by order without skipping input fields!"
                inputError = true
            }
            if (checkText(body[key]) === true) {
                message = "The ingredient name cannot contain numbers or signs!"
                inputError = true
            }
        }
        if (key.slice(0, 10) === 'ingredient' && key.slice(-8) === "Quantity" && body[key] !== "") {
            if (checkQuantity(body[key]) === true) {
                message = "The ingredient quantity cannot contain the following signs: (: ; ? ! ` ')!"
                inputError = true
            }
        }
    }

    if (checkText(body.recipe) === true) {
        message = "The recipe name cannot contain numbers or signs!"
        inputError = true
    }

    return { message, inputError }
}

function checkText(text) {
    let containsSignsOrNums = false
    for (let char of text.split("")) {
        if ([".", ",", ":", ";", "?", "!", "`", "'", '"'].includes(char) || parseInt(char) >= 0) {
            containsSignsOrNums = true
        }
    }
    return containsSignsOrNums
}

function checkQuantity(text) {
    let containsSignsOrNums = false
    for (let char of text.split("")) {
        if ([":", ";", "?", "!", "`", "'"].includes(char)) {
            containsSignsOrNums = true
        }
    }
    return containsSignsOrNums
}
module.exports = { checks }