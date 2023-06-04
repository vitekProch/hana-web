const PriceList = require('../models/BigPersonalPriceList');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');


const getAllPriceList = async (req, res) => {
    const priceList = await PriceList.find({});
    res.status(StatusCodes.OK).json({ priceList });
};
const createPriceList = async (req, res) => {
    const priceList = await PriceList.create(req.body);
    res.status(StatusCodes.CREATED).json({ priceList });
};
const updatePriceList = async (req, res) => {
    const { id: priceId } = req.params;
    const priceList = await PriceList.findByIdAndUpdate(priceId, req.body, { new: true, runValidators: true });
    res.status(StatusCodes.OK).json({ priceList });
};
const updateOnePriceList = async (req, res) => {
    const { id: priceId, packageNumber, itemNumber } = req.params;
    const body = req.params
    const priceList = await PriceList.find({_id: Object(priceId), "priseCategory._id": Object("645bb0c9ca7d09f32727de64")})

    res.status(StatusCodes.OK).json({ priceList });
};


const deletePriceList = async (req, res) => {
    const { id: priceListId } = req.params;

    const image = await Images.findOneAndRemove({ _id: priceListId })
    if (!image) {
        throw new NotFoundError(`No priceList with id ${priceListId}`);
    }
    res.status(StatusCodes.OK).send();
};

module.exports = {
    getAllPriceList,
    createPriceList,
    deletePriceList,
    updatePriceList,
    updateOnePriceList,
}