const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const Images = require('../models/Images');

const validate = (text) => {
    newText = text
        .toLowerCase().replace(/-+/g,' ');
    return newText;
}

const getAllImages = async (req, res) => {
    const images = await Images.find({});
    res.status(StatusCodes.OK).json({ images });
};

const getImagesByCategory = async (req, res) => {
    const images = await Images.find({ category: req.params.category });
    res.status(StatusCodes.OK).json({ images });
};

const createImage = async (req, res) => {
    let { url, alt, category } = req.body;
    category = validate(category);
    alt = validate(alt);
    const image = await Images.create({ url, alt, category });
    res.status(StatusCodes.CREATED).json({ image });
};

const updateImage = async (req, res) => {
    const { id: imageId } = req.params;
    const image = await Images.findByIdAndUpdate(imageId, req.body, { new: true, runValidators: true });
    if (!image) {
        throw new NotFoundError(`No image with id ${imageId}`);
    }
    res.status(StatusCodes.OK).json({ image });
};

const deleteImage = async (req, res) => {
    const { id: imageId } = req.params;

    const image = await Images.findOneAndRemove({ _id: imageId })
    if (!image) {
        throw new NotFoundError(`No image with id ${imageId}`);
    }
    res.status(StatusCodes.OK).send();
};

module.exports = {
    getAllImages,
    getImagesByCategory,
    createImage,
    updateImage,
    deleteImage,
}