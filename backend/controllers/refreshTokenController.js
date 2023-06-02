const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    return res.sendStatus(401);
  }
  
  const refreshToken = cookies.jwt;
  const user = await User.findOne({ id: req.body.userId });
  const userRefreshToken = await RefreshToken.findOne({ token: refreshToken });
  
  if (!user || !userRefreshToken) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, process.env.JWT_SEC, (err, result) => {
    if (err || user.id !== result.id) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign(
      {
        id: result.id,
        isAdmin: result.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "1h" }
    );

    return res.send({ accessToken });
  });
};

module.exports = { handleRefreshToken };
