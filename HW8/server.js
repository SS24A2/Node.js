const express = require("express")
const { getData, postData } = require("./handlers")

const app = express()
app.use(express.urlencoded({ extended: true }))

app.get("/analysis", getData)
app.post("/analysis", postData)


app.listen(8085, () => console.log("server started on 8085"))