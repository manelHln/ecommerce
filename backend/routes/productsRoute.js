const router = require("express").Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploads,
} = require("../controllers/productsController");

router.route("/").get(getProducts).post(uploads.single("image"), createProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
