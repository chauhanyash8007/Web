// "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql" -u root -p
// Type quit to exit

// 1) workbench
// 2) run this current file after connection established
// 3) CLI : run 1 line , then SHOW DATABASES; , USE delta_app; , then SHOW TABLES;
// 4) For Large queries create sql file then CLI : run 1 line , then SHOW DATABASES; , USE delta_app; , then source schema.sql;

// let getRandomUser = () => {
//   return {
//     id: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// Inserting new data
// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

// let q1 = "SHOW TABLES";

// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];

// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "chauhanyash8007@gmail.com",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

app.listen("3000", () => {
  console.log("server is listening on port 3000");
});

// if using arrays of array then change user with [users]
// and change 4 ? with 1 ? ok
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
