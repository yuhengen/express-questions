const express = require("express");
const hbs = require("hbs");

let app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

var handlebars = require("handlebars");
var helpers = require("handlebars-helpers")({
  handlebars: hbs.handlebars,
});

// ROUTING

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about-us", (req, res) => {
  res.render("about-us.hbs");
});

app.get("/multiply/:left/:right", (req, res) => {
  let left = parseInt(params.body.left);
  let right = parseFloat(params.body.right);
  let result = left * right;

  res.render("results.hbs", {
    left,
    right,
    result,
  });
});

// this is so that we can test
module.exports = app;
