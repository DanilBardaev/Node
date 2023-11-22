const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, +"/public/index.html"));
});
router.post("/", function (req, res) {});

router.get("/register", function (req, res) {});
router.post("/register", function (req, res) {});

// app.get("/test", (req, res) => {
//   res.sendFile(path.join(dirname + "/public/index.html"));
//   addLine("Пинганули /");
// });

// app.get("/test", (req, res) => {
//   console.log("Прошли по пути тест");
//   res.end("Hello");
// });
// app.use(myRoutes);
// app.post("/test", (req, res) => {
//   console.log("Прошли по пути post test");
//   console.log(req.body);
//   res.end("Прошли по пути post test");
// });
// app.listen(port, function () {
//   console.log("Сервер запущен порт " + port);
//   addLine("server started ");
// });
module.exports = router;

// .
