const User = require("../models/user");
exports.form = (req, res) => {
  res.render("register", {});
};

exports.submit = (req, res, next) => {
  // const email = req.body.user.email;
User.findByEmail(req.body.dataform.email, function (err, user) => {
if (!user) {
  User.create(req.body.user, (err)=> {
if(err) return next(err);
})
    }
res.error("Такой пользователь существует в базе");
res.redirect("/")
}};
)
