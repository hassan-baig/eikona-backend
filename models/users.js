"use-strict";
require("dotenv").config();
const mongoose = require("mongoose");

const User = new mongoose.Schema({
  walletId: {
    type: String,
  },
  geoFigId: {
    type: String,
  },
  geoFigName: {
    type: String,
  },
  geoFigImage: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  coordinates: {
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
});

module.exports = mongoose.model("users", User);
