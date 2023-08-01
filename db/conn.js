const mongoose = require("mongoose");

const DB =process.env.MONGODB_URI;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.log(error);
  });
