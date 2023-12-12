const User = require("../models/user");

exports.form = (req, res) => {
  res.render("login", { title: "Login" });
};

// exports.submit = (req, res, next) => {
// const email = req.body.user.email;

exports.submit = (req, res, next) => {
  User.authentificate(req.body.login, (err, data) => {
    if (err) return next(err);
    if (!data) {
      console.log("Имя или пароль неверны");
      res.redirect("back");
    } else {
      if (data) req.userSession.userEmail = data.email;
      req.userSession.userName = data.name;
      res.redirect("back");
    }
  });
};

exports.logout = function (req, res) {};
