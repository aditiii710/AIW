const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
var path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const app = express();
const passport = require("passport");

// app.use("/public", express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

// mongoose
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(console.log("MonogDB connected..."))
//   .catch((err) => console.log(err));

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", require("./routes/index"));
// app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 3003;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
