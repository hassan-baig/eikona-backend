require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const dbConnection = require("./config/database");

const corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["authorization"],
};
app.use(cors(corsOption));
app.use("/", require("./app/app"));

const setPort = process.env.PORT || 8080;

dbConnection().then(() => {
  app.listen(setPort, () => console.log(`EIKONA on server ${setPort}`));
});
