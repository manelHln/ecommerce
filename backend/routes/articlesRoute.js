const router = require("express").Router();
const {
  createArticle,
  editArticle,
  getAllArticles,
  deleteArticle,
  getArticle,
} = require("../controllers/articlesContoller");

router.route("/").get(getAllArticles).post(createArticle);
router.route("/:id")
  .put(editArticle)
  .get(getArticle)
  .delete(deleteArticle);

  module.exports = router
