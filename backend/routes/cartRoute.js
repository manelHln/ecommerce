const router = require("express").Router();
const {
  NewCart,
  deleteCart,
  getCart,
  getAll,
} = require("../controllers/cartController");
const {
  VerifyTokenAndAdmin,
  VerifyToken,
  VerifyTokenAndAuthorization,
} = require("../middlewares/VerifyToken");

router
  .route("/")
  .post(VerifyToken, NewCart)
  .get(VerifyTokenAndAdmin, getAll);
router
  .route("/:userId")
  .delete(VerifyTokenAndAuthorization, deleteCart)
  .get(VerifyToken, getCart);

module.exports = router;
