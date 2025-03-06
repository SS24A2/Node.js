const express = require("express")
const { getForm, postData, getRecipes, deleteRecipe } = require("./handlers")

const app = express()
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))

app.get("/form", getForm)
app.post("/form", postData)
app.get("/recepti", getRecipes)
app.get("/brishi", deleteRecipe)

app.listen(8089, () => console.log("Server started at port 8089"))