const mongoose = require("mongoose");

const uri = "mongodb+srv://User-Pass@cluster0.im0jw.mongodb.net/DB?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
