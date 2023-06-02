const router = require("express").Router();
const {
  createCategory,
  getCategories,
  editCategory,
  deleteCategory,
  upload,
} = require("../controllers/categoryController");

router
  .route("/")
  .get(getCategories)
  .post(upload.single("image"), createCategory);

router.route("/:id").delete(deleteCategory).put(editCategory);

module.exports = router;
