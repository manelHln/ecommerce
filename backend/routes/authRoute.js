const {
  Register,
  Login,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} = require("../controllers/authController");
const router = require("express").Router();
const {
  VerifyTokenAndAdmin,
  VerifyTokenAndAuthorization,
} = require("../middlewares/VerifyToken");

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/users").get(VerifyTokenAndAdmin, getUsers);
router
  .route("/users/:id")
  .get(VerifyTokenAndAuthorization, getUser)
  .put(VerifyTokenAndAuthorization, editUser)
  .delete(VerifyTokenAndAuthorization, deleteUser);

module.exports = router;
