const express = require('express');

require('../middleware/logger')();

const app = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/', require('../routes'));

module.exports = app;
