const products = require("../models/productModel");
const uploads = require("../config/multerConfig");

//Get all products

const getProducts = async (req, res) => {
  try {
    const Allproducts = await products.find();
    res.send(Allproducts);
  } catch (error) {
    res.json(error);
  }
};

//Create a new product

const createProduct = async (req, res) => {
  try {
    const newProduct = await products.create({
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      category: req.body.category,
      image: `${process.env.UPLOADED_IMAGE_PATH}${req.file.filename}`,
      reviews: req.body.reviews,
    });
    res.send(newProduct);
  } catch (error) {
    res.json(error);
  }
};

//edit a product
const updateProduct = async (req, res) => {
  try {
    const findProduct = await products.findById(req.params.id);
    if (!findProduct) {
      res.status(404).send("Product not found");
    }

    const updatedProduct = await products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(updatedProduct);
  } catch (error) {
    res.json(error);
  }
};

//Delete a product

const deleteProduct = async(req, res) => {
  try {
    const findProduct = await products.findById(req.params.id)
    if(!findProduct){
      res.status(400).send("Bad Request!!")
    }
    await findProduct.remove()
    res.send("Product deleted successfully!")
  } catch (error) {
    res.status(500).send(error.name)
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploads,
};
