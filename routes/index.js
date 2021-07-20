const experss = require("express");
const router = experss.Router();

router.get("/", (req, res) => res.send("WELCOME"));

module.exports = router;
