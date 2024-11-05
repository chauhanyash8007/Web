const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // for view directory path
app.use(express.static(path.join(__dirname, "public"))); // for public directory path

let posts = [
  { id: uuidv4(), username: "Yash", content: "I love coding" },
  { id: uuidv4(), username: "pooja", content: "Hard working" },
  { id: uuidv4(), username: "rahul", content: "got 1 internship" },
];

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/post/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});
