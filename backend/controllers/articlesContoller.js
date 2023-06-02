const articles = require("../models/blogModel");

//Get all articles

const getAllArticles = async (req, res) => {
  try {
    const AllArticles = await articles.find();
    res.send(AllArticles);
  } catch (error) {
    res.json(error);
  }
};

//Create an article

const createArticle = async (req, res) => {
  try {
    const newArticle = await articles.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.send(newArticle);
  } catch (error) {
    res.json(error);
  }
};

const getArticle = async (req, res) => {
  try {
    const Article = await articles.findById(req.params.id);
  } catch (error) {
    res.json(error);
  }
};

const editArticle = async (req, res) => {
  try {
    const article = await articles.findById(req.params.id);
    if (!article) {
      res.status(404).send("Article not found");
    }
    const updatedArticle = await articles.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedArticle);
  } catch (error) {
    res.json(error);
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await articles.findById(req.params.id);
    if (!article) {
      res.status(404).send("Article doesn't exist");
    }
    await article.remove();
    res.send("Article deleted successfully");
  } catch (error) {}
};

module.exports = {
  getArticle,
  editArticle,
  deleteArticle,
  createArticle,
  getAllArticles
};
