
function sentenceCounter(text) {
    let sentencesCount = 0
    for (let i = 0; i < text.length; i++) {
        if ([".", "?", "!"].includes(text[i]) && ![".", "?", "!"].includes(text[i - 1])) {
            sentencesCount++
        }
    }
    return sentencesCount
}

function letterCounter(word) {
    let count = 0
    for (let char of word) {
        if (![".", ",", ":", ";", "?", "!", "`", "'", '"', "-", " "].includes(char)) {
            count++
        }
    }
    return count
}


function calculateParam1(text) {
    return text.split("").filter(char => ![".", ",", ":", ";", "?", "!", "`", "'", '"', "-", " "].includes(char) && !parseInt(char) > 0).length
}

function calculateParam2(text) {
    return text.split(' ').filter(word => !parseInt(word) > 0 && word !== "...").map(word => letterCounter(word)).filter(item => item < 5).length
}

function calculateParam3(text) {
    return text.split(' ').filter(word => !parseInt(word) > 0 && word !== "...").map(word => letterCounter(word)).filter(item => item > 5).length
}

function calculateParam4(text) {
    return text.split(' ').filter(word => !parseInt(word) > 0 && word !== "...").map(word => letterCounter(word)).filter(item => item === 5).length
}

function calculateParam5(text) {
    return sentenceCounter(text)
}

function calculateParam6(text) {
    return text.split(' ').filter(word => !parseInt(word) > 0 && word !== "...").length
}

function calculateParam7(text) {
    return text.split(' ').filter(word => ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(word[0])).length
}

module.exports = { calculateParam1, calculateParam2, calculateParam3, calculateParam4, calculateParam5, calculateParam6, calculateParam7 }

//Sample text
/*   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis reiciendis eos quasi ea at voluptatibus porro fuga quos et id corrupti distinctio soluta perferendis, voluptate perspiciatis iure dolorum architecto totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis reiciendis eos quasi ea at voluptatibus porro fuga quos et id corrupti distinctio soluta perferendis, voluptate perspiciatis iure dolorum architecto totam?! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis reiciendis eos quasi ea at voluptatibus porro fuga quos et id corrupti distinctio soluta perferendis, voluptate perspiciatis iure dolorum architecto totam!"   */ 