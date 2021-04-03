const express = require("express");
const app = express();

const users = [];

app.use(express.urlencoded({extended: false}))
app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {
  req.body.email
});

app.listen(3000);
