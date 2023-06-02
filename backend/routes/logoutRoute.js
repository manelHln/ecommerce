const router = require("express").Router();
const { handleLogout } = require("../controllers/handleLogoutController");

router.route("/").get(handleLogout);

module.exports = router;
