const User = require("../models/user");
exports.form = (req, res) => {
  res.render("login", { title: "Login" });
};

exports.submit = (req, res, next) => {
  User.authentificate(req.body.login, (error, data) => {
    if (error) return next(error);
    if (!data) {
      console.log("Имя или пароль неверный");
      res.redirect("back");
    } else {
      req.session.userEmail = data.email;
      req.session.userName = data.name;
      res.redirect("/");
    }
  });
};

exports.logout = (req, res) => {};
