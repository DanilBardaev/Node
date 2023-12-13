const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("test.sqlite");
const bcrypt = require("bcrypt");

const sql =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,email TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sql);

class User {
  constructor() {}
  static async create(dataform, cb) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(dataform.password, salt);
      const sql1 =
        "INSERT INTO users (name, email, password, age) VALUES (?,?,?,?)";
      db.run(sql1, dataform.name, dataform.email, hash, dataform.age, cb);
    } catch (err) {
      if (err) return next(error);
    }
  }

  static findByEmail(email, cb) {
    db.get("SELECT * FROM users WHERE email = ?", email, cb);
  }

  static authentificate(dataform, next, cb) {
    User.findByEmail(dataform.email, (err, user) => {
      if (err) return cb(error);
      if (!user) return cb();
      const result = bcrypt.compare(
        dataform.password,
        user.password,
        (err, result) => {
          if (result) return cb(null, user);
          cb();
        }
      );
    });
  }
}
module.exports = User;
