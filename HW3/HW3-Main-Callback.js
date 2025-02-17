const { writeContent, appendContent } = require("./HW3-LocalModule-Callback")

// writeContent("booksCallbacks.txt", "Book Recommendations: ")

let dataToAppend = "The Time Traveler's Wife by Audrey Niffenegger, "
dataToAppend = "The Fault in Our Stars by John Green, "
appendContent("booksCallbacks.txt", dataToAppend)

