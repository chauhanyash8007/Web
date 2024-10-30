const express = require("express"); // don't need to require EJS express has already require EJS internally
let app = express();
let port = 3000;

let path = require("path");

app.set("view engine", "ejs"); // view engine -> template engine ( for creating templates )

// it is basically used to solve the problem of that while the running the server from outside
// of the view folder Directory
app.set("views", path.join(__dirname, "views"));
// telling the path for view folder -> using path.join function -> used to join 2 paths
// __dirname -> Define current working Directory index.js where we have write our server code

// By default when express call res.render this res.render will find the view folder and then find the home.ejs file for execution
// we can also write home only it still works
app.get("/", (req, res) => {
  res.render("home.ejs"); // render -> Sending Files (sending EJS files)
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/rolldice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { diceVal: num });
  // res.render("rollDice.ejs", { num}); also can write direct value like this
});

app.get("/ig/:username", (req, res) => {
  // let followers = ["Rishi", "Priyanshu", "Karan"];
  // let { username } = req.params;
  let { username } = req.params;
  const instaData = require("./data.json");
  let Data = instaData[username];
  // console.log(Data);
  // console.log(instaData);
  if (Data) {
    res.render("instagram.ejs", { Data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
