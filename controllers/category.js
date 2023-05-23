const Category = require('../models/Category');
const { StatusCodes } = require('http-status-codes');

const getAllCategory = async (req, res) => {
    const categories = await Category.find({});
    res.status(StatusCodes.CREATED).json({ categories });
}


const createCategory = async (req, res) => {
    let { categoryName, categoryImage } = req.body;
    categoryName = categoryName
        .toLowerCase()
        .split(' ')
        .join('-');

    const category = await Category.create({categoryName, categoryImage});
    res.status(StatusCodes.CREATED).json({ category });
    res.send();
}

module.exports = {
    getAllCategory,
    createCategory,
}