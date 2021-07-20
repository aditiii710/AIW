const experss = require("express");
const router = experss.Router();

router.get("/", (req, res) => res.render("home"));

module.exports = router;
