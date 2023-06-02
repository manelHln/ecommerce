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

const getSingleProduct = async (req, res) => {
  try {
    const product = await products.findById(req.params.id);
    if (!product) {
      res.status(404).send("Product not found");
    }
    res.status(200).send(product);
  } catch (error) {
    res.json(error);
  }
};

//Create a new product

const createProduct = async (req, res) => {
  try {
    const categories = req.body.category.split(",");
    const { image, gallery, videoTutorials } = req.files;
    const productImages = image.map(
      (file) => `${process.env.UPLOADED_IMAGE_PATH}${file.filename}`
    );
    const productGallery = gallery.map(
      (file) => `${process.env.UPLOADED_IMAGE_PATH}${file.filename}`
    );
    const productVideos = videoTutorials.map(
      (file) => `${process.env.UPLOADED_IMAGE_PATH}${file.filename}`
    );
    const newProduct = await products.create({
      name: req.body.name,
      price: req.body.price,
      desc: req.body.desc,
      category: categories,
      image: productImages[0],
      reviews: req.body.reviews,
      gallery: productGallery,
      videoTutorials: productVideos,
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

const deleteProduct = async (req, res) => {
  try {
    const findProduct = await products.findById(req.params.id);
    if (!findProduct) {
      res.status(400).send("Bad Request!!");
    }
    await findProduct.remove();
    res.send("Product deleted successfully!");
  } catch (error) {
    res.status(500).send(error.name);
  }
};

// get a product by category

// const getByCategory = async(req, res) => {
//   const category = req.params.category
//   try {
//     const productByCategory = await products.find({category: {$in: category}})
//     res.status(200).send(productByCategory)
//   } catch (error) {
//     res.json(error)
//   }
// }

const getByCategory = async (req, res) => {
  const category = req.params.category.toLowerCase(); // Convert category to lowercase

  try {
    const productByCategory = await products.find({
      category: { $regex: new RegExp("^" + category + "$", "i") },
    });
    res.status(200).send(productByCategory);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getByCategory,
  uploads,
};
