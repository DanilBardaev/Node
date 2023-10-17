const path = require("path");
// console.log("Название файла: ", path.basename(__filename));
// console.log("Название каталога: ", path.dirname(__filename));
// console.log("Расширение: ", path.extname(__filename));
const fs = require("fs");
// fs.mkdir(path.join(__dirname, "tmp"), function (err) {
//   if (err) {
//     console.error(err);
//   }
//   console.log("Папка создана");
// });
const filePath = path.join(__dirname, "tmp", " 2 txt");
console.log(filePath);
fs.writeFile(filePath, "\n Something is wrong in the file", function (err) {
  if (err) {
    console.error(err);
  }
  console.log("Папка создана");
});
fs.appendFile(
  filePath,
  "\n Something went wrong with the file",
  function (err) {
    if (err) {
      console.error(err);
    }
    console.log("Папка создана");
  }
);
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
