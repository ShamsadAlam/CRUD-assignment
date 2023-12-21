const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
const connectDatabase = require("./config/database");

const task = require("./routes/TaskRoutes");

app.use("/shamsad/task", task);

//Connecting to database
connectDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
