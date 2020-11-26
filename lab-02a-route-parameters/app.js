const express = require("express");

let app = express();

app.get("/header/:title", (req, res) => {
  let title = req.params.title;
  res.send("<h1>" + title + "</h1>");
});

app.get("/add/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);

  total = num1 + num2;

  res.send(total + "");
});

app.get("/shorten/:text", (req, res) => {
  let text = req.params.text;
  if (text.length > 10) {
    text = text.slice(0, 9) + "...";
  }

  res.send(text);
});

module.exports = app;
