const order = require("../models/orderModel");

// Create order

const NewOrder = async (req, res) => {
  try {
    const newOrder = await order.create(req.body);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

//edit a order
const updateOrder = async (req, res) => {
  try {
    const findOrder = await order.findById(req.params.id);
    if (!findOrder) {
      res.status(404).send("Product not found");
    }
    const updatedOrder = await order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.send(updatedOrder);
  } catch (error) {
    res.json(error);
  }
};

//Delete order

const deleteOrder = async (req, res) => {
  try {
    const findOrder = await products.findById(req.params.id);
    if (!findOrder) {
      res.status(400).send("Bad Request!!");
    }
    await findOrder.remove();
    res.status(200).send("order deleted successfully");
  } catch (error) {
    res.status(500).send(error.name);
  }
};

//Get a user's order

const getOrder = async (req, res) => {
  try {
    const orders = await order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all

const getAll = async (req, res) => {
  try {
    const orders = await order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error)
  }
};

module.exports = { NewOrder, updateOrder, deleteOrder, getOrder, getAll };
