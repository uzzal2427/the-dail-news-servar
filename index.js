const express = require("express");
const app = express();

const categories = require("./data/categories.json");
const news = require("./data/news.json");
var cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const singleNews = news.find((n) => n._id == id);
  res.send(singleNews);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const newsCategory = news.filter((n) => n.category_id === id);
    res.send(newsCategory);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
