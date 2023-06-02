const router = require("express").Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getByCategory,
  uploads,
} = require("../controllers/productsController");
const {
  VerifyTokenAndAdmin,
  VerifyTokenAndAuthorization,
} = require("../middlewares/VerifyToken");

router
  .route("/")
  .get(getProducts)
  .post(
    VerifyTokenAndAdmin,
    uploads.fields([
      { name: "image", maxCount: 1 },
      { name: "gallery", maxCount: 10 },
      { name: "videoTutorials", maxCount: 4 },
    ]),
    createProduct
  );

router
  .route("/:id")
  .put(VerifyTokenAndAdmin, updateProduct)
  .get(getSingleProduct)
  .delete(VerifyTokenAndAdmin, deleteProduct);

router.route("/category/:category").get(getByCategory);

module.exports = router;
