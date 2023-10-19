const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const connectDB = require("./db");

const app = express();

require("dotenv").config();

// Connect to the database
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

//Routes
app.get("/home", (req, res) => {
  res.json("Hello world");
});

//Running the server
const server = process.env.PORT;

app.listen(server, () => {
  console.log(`This server is running on http://localhost: ${server}`);
});
