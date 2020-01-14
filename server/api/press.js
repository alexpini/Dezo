const router = require("express").Router();
const { Press } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const articles = await Press.findAll({
      order: ["updatedAt"]
    });
    res.json(articles);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const article = await Press.create(req.body);
    res.json(article);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Press.destroy({ where: { id: req.params.id } });
    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
