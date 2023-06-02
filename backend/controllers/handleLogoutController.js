const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(204);
  }

  const refreshToken = cookies.jwt;
  const user = await User.findOne({ id: req.body.userId });
  const userRefreshToken = await RefreshToken.findOne({ token: refreshToken });

  if (!user || !userRefreshToken) {
    return res
      .clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      .status(204)
      .send();
  }

  try {
    await userRefreshToken.remove();
    return res
      .clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
      .status(204)
      .send();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleLogout };
