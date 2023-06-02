const categories = require("../models/categoriesModel");
const upload = require("../config/multerConfig")

//create new category

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categories.create({
      name: name,
      image: `${process.env.UPLOADED_IMAGE_PATH}${req.file.filename}`,
    });
    if (newCategory) {
      res.status(200).send(newCategory);
    }
  } catch (error) {
    res.json(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const Allcategories = await categories.find();
    if (categories) {
      res.status(200).send(Allcategories);
    } else {
      res.send("No category found");
    }
  } catch (error) {
    res.json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await categories.findById(req.params.id);
    if (!category) {
      res.send("Category doesn't exist");
    } else {
      await category.remove();
      res.status(200).send("Category deleted successfully!");
    }
  } catch (error) {
    res.json(error);
  }
};

const editCategory = async (req, res) => {
  try {
    const category = await categories.findById(req.params.id);
    !category && res.status(404).send("category not found");
    await categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
  } catch (error) {
    res.json(error);
  }
};


module.exports = {createCategory, getCategories, editCategory, deleteCategory, upload}