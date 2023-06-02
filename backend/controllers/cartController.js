const Cart = require("../models/cartModel");

const NewCart = async (req, res) => {
  const { productId, userId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // Cart exists for the user
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);

      if (itemIndex > -1) {
        // Product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity += quantity;
        cart.products[itemIndex] = productItem;
      } else {
        // Product does not exist in the cart, add new item
        cart.products.push({ productId, quantity });
      }

      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      // No cart for the user, create a new cart
      const newCart = await Cart.create({
        userId,
        products: [{ productId, quantity }],
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

//Delete a cart

const deleteCart = async (req, res) => {
  try {
    const findCart = await products.findOne(req.params.id);
    if (!findCart) {
      res.status(400).send("Bad Request!!");
    }
    await findCart.remove();
    res.status(200).send("cart deleted successfully");
  } catch (error) {
    res.status(500).send(error.name);
  }
};

//Get a user's cart

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all

const getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { NewCart, deleteCart, getCart, getAll };
