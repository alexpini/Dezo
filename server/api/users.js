const router = require("express").Router();
const { User } = require("../db/models");

router.put("/:id", async (req, res, next) => {
  try {
    let updatedUser;
    if (req.user.email) {
      updatedUser = await User.update(req.body, {
        where: { id: req.params.id },
        returning: true
      });
    }
    if (updatedUser.length > 0) {
      res.json(updatedUser[1]);
    } else {
      res.status(403).json({ message: "Nope" });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
