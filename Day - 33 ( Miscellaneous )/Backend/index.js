const express = require("express");
const app = express();
const port = 3000;

// if we receive url encoded data in our request body then express will automatically parse this data for his understanding
// it is Middleware
app.use(express.urlencoded({ extended: true }));
// app.use means work for every request like get and post

// another middleware for express to understand json format data
app.use(express.json());

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/register", (req, res) => {
  // In get request data is come in form of query string
  let { user, password } = req.query;
  res.send(`standard GET response, Welcome ${user}`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`standard POST response, Welcome ${user}`);
});
