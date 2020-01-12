const router = require("express").Router();

router.use("/products", require("./products"));
router.use("/auth", require("./auth"));
router.use("/stores", require("./stores"));
router.use("/users", require("./users"));

module.exports = router;
