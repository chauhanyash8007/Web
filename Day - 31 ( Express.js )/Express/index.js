// Library -> are used to do some small specific small task in our big code
// we can control Library that where it should be used

// Framework -> Define overall structure of our code( what should be structured of our web application )
// not much control on Framework they tells how should be code written

const express = require("express");
const app = express(); // it basically a function that executes and give some value here ( app ) is object
// console.dir(app);
let port = 3000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`); // Type control + C To stop listening the server
});

// app.use listen all requests and give same response for all routes
// app.use((req, res) => {
// console.log(req);
//   console.log("new incoming request");
// res.send({
//   name: "apple",
//   color: "red",
// });
//   let code =
//     "<h1>Hello</h1><ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>";
//   res.send(code);
// });

// so we use app.get this will return different responses for different routes
// we can only send 1 response for every 1 incoming request we
// can not send 2 responses for 1 request

// app.get("/home", (req, res) => {
//   res.send("you contacted root(home) path");
// });
// app.get("/search", (req, res) => {
//   res.send("you contacted search path");
// });
// app.get("/help", (req, res) => {
//   res.send("you contacted help path");
// });
// app.post("/contact", (req, res) => {
//   res.send("you contacted contact path");
// });
// app.post("/aboutUs", (req, res) => {
//   res.send("you contacted aboutUs path");
// });
// app.get("*", (req, res) => {
//   res.send("path dose not exits");
// });

app.get("/", (req, res) => {
  res.send("Hello i am root");
});

// here :username is treated as variable in our request as parameter
app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  let { username, id } = req.params;
  res.send(`<h1>Welcome To the page of @${username}</h1>`);
});

// here q=something is our query string request url = /search?q=something
// in parameters we send additional information in the form of query string that come and stores in req.query
app.get("/search", (req, res) => {
  console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing Searched</h1>");
  } else {
    res.send(`<h1>Search results for query: ${q}</h1>`);
  }
});
