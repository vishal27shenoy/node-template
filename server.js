require("dotenv").config();
const express = require("express");
const server = express();

server.use("/", (request, response) => {
  response.send("<h1>Keep Chilling</h1>");
});

server.listen(process.env.PORT, () => {
  console.log("SERVER STARTED AT", process.env.PORT);
});
