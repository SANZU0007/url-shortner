require('dotenv').config();

const express = require("express");
const app = express();
require("./db/conn");

const cors = require("cors");
const router = require("./routes/router");
const cookiParser = require("cookie-parser");

const port = process.env.PORT || 8004;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`server is starting ${port}`);
});
