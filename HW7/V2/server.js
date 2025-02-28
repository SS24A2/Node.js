const express = require("express")

const { postData, getData, updateData, deleteData } = require("./handlers2")

const app = express()
app.use(express.json())

app.get("/books/:fileName", getData)
app.post("/books/:fileName", postData)
app.put("/books/:bookIndex/:fileName", updateData)
app.delete("/books/:bookIndex/:fileName", deleteData)

app.listen (8087, ()=>console.log("server started on port 8087"))

