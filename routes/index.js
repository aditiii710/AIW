const experss = require("express");
const router = experss.Router();

router.get("/", (req, res) => res.render("home"));
router.get("/contact", (req, res) => res.render("contact"));

module.exports = router;
