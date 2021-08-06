const experss = require("express");
const router = experss.Router();

router.get("/", (req, res) => res.render("home"));

router.get("/contact", (req, res) => res.render("contact"));

router.get("/startups", (req, res) => res.render("startups"));

router.get("/school", (req, res) => res.render("schools"));

router.get("/manufacture", (req, res) => res.render("manufacture"));

router.get("/finance", (req, res) => res.render("finance"));

router.get("/restaurant", (req, res) => res.render("restro"));

router.get("/contact", (req, res) => res.send("contact"));

router.get("/business", (req, res) => res.render("business"));

module.exports = router;
