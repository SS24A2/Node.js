const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const fileUpload = require("express-fileupload");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config"); // sekcija development
const { login, register } = require("./handlers/auth");
const { upload, download, listFilesForUser, removeFile, uploadTest } = require("./handlers/storage");

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

app.use(fileUpload());

app.post("/auth/login", login);
app.post("/auth/register", register);

app.post("/api/storage", upload);
app.get("/api/storage/:filename", download);

//HW
app.get("/api/list", listFilesForUser)
app.delete("/api/storage/:filename", removeFile);
app.post("/api/test", uploadTest);
//

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}!`)
);
