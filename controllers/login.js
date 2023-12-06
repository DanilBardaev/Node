const User = require("../models/user");
exports.form = (req, res) => {
  res.render("login", {});
};

exports.submit = (req, res, next) => {
  // const email = req.body.user.email;
  if ("!Игорь есть в базе данных?") User.create(req.body.user, cb);
};
