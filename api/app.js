const express = require("express");
require("dotenv").config();

const app = express();

//Running the server

const server = process.env.PORT;

app.listen(server, () => {
  console.log(`This server is running on http://localhost: ${server}`);
});
