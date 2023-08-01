const mongoose = require("mongoose");

const DB =
  "mongodb+srv://sanjay:sanjay2022@cluster0.tjzm3y1.mongodb.net/Authusers?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error);
  });
