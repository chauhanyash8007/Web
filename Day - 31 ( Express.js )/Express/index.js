const express = require("express");
const app = express();

console.dir(app); // it is an object

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
}); // click ctrl+c to stop listening server

// app.use((req, res) => {
//   console.log(req);
//   console.log("request received");
//   res.send({
//     name: "apple",
//     color: "red",
//   });
//   let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//   res.send(code);
// });

// if we use app.use then it will give same page for every path but we can use app.get to send a specific page of decided path
// page;

app.get("/", (req, res) => {
  res.send("hello i am root");
});
// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//   res.send("this page is not available");
// });

// app.post("/", (req, res) => {
//   res.send("you contacted post root path");
// });

app.get("/:username/:id", (req, res) => {
  //   console.log(req.params);
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}`;
  //   res.send(`welcome to the page of @${username}`);
  res.send(htmlStr);
});

app.get("/search", (req, res) => {
  //   console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("<h1>no results found</h1>");
  }

  res.send(`<h1>search result for query: ${q}</h1>`);
});
