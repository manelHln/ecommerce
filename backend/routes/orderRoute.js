const router = require("express").Router();
const {
  NewOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAll,
} = require("../controllers/orderController");
const {
  VerifyTokenAndAdmin,
  VerifyTokenAndAuthorization,
} = require("../middlewares/VerifyToken");

router
  .route("/")
  .get(VerifyTokenAndAdmin, getAll)
  .post(VerifyTokenAndAuthorization, NewOrder);
router
  .route("/:userId")
  .put(VerifyTokenAndAuthorization, updateOrder)
  .delete(VerifyTokenAndAuthorization, deleteOrder)
  .get(VerifyTokenAndAuthorization, getOrder);

module.exports = router;
