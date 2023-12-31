const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const app = express("");
const myRoutes = require("./routers/index_routers");
const session = require("express-session");
const userSession = require("./middleware/user_session");
app.use(express.json());
app.use(express.urlencoded({ extendend: true }));
app.use(
  session({
    secret: "aboba",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(userSession);
app.use(myRoutes);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "css/bootstrap.css",
  express.static(
    path.join(
      __dirname,
      "../public/css/bootstrap-5.3.2/dist/css/bootstrap.min.css"
    )
  )
);

const port = "3000";

app.listen(port, function () {
  console.log("Сервер запущен порт " + port);
  addLine("server started ");
});
// 3
function addLine(line) {
  line = line + "timestamp:" + new Date().toLocaleString();
  fs.appendFile(
    path.join(__dirname + "/public/logger.txt"),
    line + "\n",
    (err) => {
      if (err);
    }
  );
}
app.use((req, res, next) => {
  const err = new Error("Could't get path");
  err.status = 404;
  ``;
  next(err);
});
app.get("env") == "production";

if (app.get("env") == "production") {
  app.use((err, req, res) => {
    res.status(err.status);
    res.sendFile(err.message);
  });
}
if (app.get("env") != "development") {
  app.use(function (err, req, res, next) {
    res.status = 404;
    link =
      "https://s3.amazonaws.com/images.seroundtable.com/t-google-404-1299071983.jpg";
    res.render("error.ejs", { err, link });
  });
} else {
  app.use(function (err, req, res, next) {
    console.log(app.get("env"), err.status, err.message);
  });
}
// 1
