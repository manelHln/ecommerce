const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");
const saltRounds = 10;

//Register a new user

const Register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send("A user with this email already exists!");
    }

    const newUser = await user.save();
    const { password, ...others } = newUser._doc;
    return res.status(201).send(others);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Login
const Login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("User not found");
  }

  try {
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordMatch) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "15d" }
      );

      const newRefreshToken = new RefreshToken({
        token: refreshToken,
        userId: user._id,
      });

      await newRefreshToken.save();

      const { password, ...others } = user._doc;

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({ ...others, accessToken });
    } else {
      return res.status(403).send("Invalid Username or Password!!");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("User doesn't exist");
    }
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (error) {
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.json(error);
  }
};

const editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(updatedUser);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { Register, Login, getUser, getUsers, deleteUser, editUser };
