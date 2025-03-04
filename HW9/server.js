const express = require("express")
const { getForm, postData, getStudents, deleteStudent } = require("./handlers")

const app = express()
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))

app.get("/form", getForm)
app.post("/form", postData)
app.get("/studenti", getStudents)
app.get("/brishi", deleteStudent)

app.listen(8088, () => console.log("Server started at port 8088"))