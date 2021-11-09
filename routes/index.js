require('express-async-errors');
const express = require('express');
const { error } = require('../middleware/error');
const app = express.Router();

app.use("/users", require("./users"));
app.use(error);

module.exports = app;
