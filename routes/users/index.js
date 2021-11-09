const express = require("express");

const User = require("../../models/users");
const { validateNew } = require("./validate");

const app = express.Router();

app.post("/", async (req, res) => {
  const { walletId, geoFigId, geoFigName, geoFigImage, latitude, longitude } =
    req.body;

  const { error } = validateNew.validate(req.body);
  if (error) return res.status(422).send({ msg: error.details[0].message });

  const user = await User.findOne({ walletId: walletId });

  await User.updateOne(
    {
      walletId: walletId,
    },
    {
      walletId: walletId,
      geoFigId: geoFigId,
      geoFigName: geoFigName,
      geoFigImage: geoFigImage,
      "coordinates.latitude": latitude,
      "coordinates.longitude": longitude,
      ...(!user && { createdAt: new Date() }),
      updatedAt: new Date(),
    },
    {
      upsert: true,
    }
  );

  return res.status(201).send({ msg: "Success" });
});

app.get("/", async (req, res) => {
  let { pageSize, page } = req.query;

  pageSize = pageSize || 10;
  page = page || 0;

  const users = await User.find()

  return res.status(200).send({ users: users });
});

module.exports = app;
