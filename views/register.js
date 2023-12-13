const User = require("../models/user");
exports.form = (req, res) => {
  res.render("register", { title: "Register" });
};

exports.submit = (req, res, next) => {
  User.findByEmail(req.body.email, (error, user) => {
    if (error) return next(error);
    if (user) {
      console.log("Такой пользователь в базе уже существует");
      res.redirect("/");
    } else {
      User.create(req.body, (err) => {
        if (err) return next(err);
        req.session.userEmail = user.email;
        req.session.user = user.name;
        res.redirect("/");
      });
    }
  });
};
