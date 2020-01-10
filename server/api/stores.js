const router = require("express").Router();
const { Store } = require("../db/models");
const http = require("http");
const GOOGLE_MAP_KEY = process.env.GOOG_KEY;
const googleMapsClient = require("@google/maps").createClient({
  key: GOOGLE_MAP_KEY,
  Promise: Promise
});

router.post("/", async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.json({ message: "you did something wrong here. Are you an admin?" });
    } else {
      const location = await Store.geo(
        req.body.address1,
        req.body.city,
        req.body.state,
        req.body.zip,
        googleMapsClient
      );
      const store = await Store.create({
        ...req.body,
        lat: location.lat,
        lng: location.lng,
        userId: req.user.id
      });
      res.json(store);
    }
  } catch (er) {
    next(er);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (er) {
    next(er);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      res.status(403).json({ message: "You cannot delete this" });
    } else {
      await Store.destroy({ where: { id: req.params.id } });
      res.sendStatus(204);
    }
  } catch (er) {
    next(er);
  }
});

module.exports = router;
