const User = require("../models/user");
exports.form = (req, res) => {
  res.render("register", { title: "Register" });
};

// exports.submit = (req, res, next) => {
// const email = req.body.user.email;

exports.submit = (req, res, next) => {
  User.findByEmail(req.body.dataform.email, (err, user) => {
    if (err) return next(err);
    if (user) {
      res.error("Такой пользователь существует в базе");
    } else {
      User.create(req.body.user, (err) => {
        if (err) return next(err);
      });
    }
    res.redirect("/");
  });
};
