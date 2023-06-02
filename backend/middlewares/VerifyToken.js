const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, result) => {
      if (err) {
        return res.status(403).send("Wrong Token!");
      }
      req.user = result;
      next();
    });
  } else {
    res.status(401).send("You are not authenticated!");
  }
};

const VerifyTokenAndAuthorization = (req, res, next) => {
  VerifyToken(req, res, () => {
    console.log(req.user)
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You are not authorized");
    }
  });
};

const VerifyTokenAndAdmin = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You are not authorized");
    }
  });
};

module.exports = {
  VerifyToken,
  VerifyTokenAndAdmin,
  VerifyTokenAndAuthorization,
};
