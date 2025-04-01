const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const { getMovies, createMovie, updateMovie, deleteMovie } = require("./handlers/movies"); 

const app = express();
app.use(express.json());

app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
     path: ["/auth/login", "/auth/register"],
  })
);

app.post("/auth/login", login);
app.post("/auth/register", register);

app.get("/movies", getMovies);
app.post("/movies", createMovie);
app.put("/movies/:id", updateMovie);
app.delete("/movies/:id", deleteMovie);

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
