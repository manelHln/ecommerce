const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const saltRounds = 10;

//Register a new user
const Register = async (req, res) => {
  await bcrypt.hash(req.body.password, saltRounds, async (err, result) => {
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: result,
    });
    try {
      const newUser = await user.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  });
};

//Login
const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).send("User not found");
  }
  try {
    const hashedPasswd = user.password;
    await bcrypt.compare(req.body.password, hashedPasswd, (err, result) => {
      result ? res.status(200).json(user) : res.status(403).send("Wrong credentials!!");
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { Register, Login };
