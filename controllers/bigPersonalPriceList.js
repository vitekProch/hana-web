const PriceList = require('../models/BigPersonalPriceList');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');


const getAllPriceList = async (req, res) => {
    const priceList = await PriceList.find({});
    res.status(StatusCodes.OK).json({priceList});
};
const createPriceList = async (req, res) => {
    const priceList = await PriceList.create(req.body);
    res.status(StatusCodes.CREATED).json({priceList});
};
const updatePriceListTitle = async (req, res) => {
    const {id : priceId} = req.params;
    const {priseTitle} = req.body;
    console.log(req.body);
    const priceList = await PriceList.findByIdAndUpdate(priceId, {priseTitle}, { new: true, runValidators: true });
    res.status(StatusCodes.OK).json({priceList});
};
const updatePriceListCategory = async (req, res) => {
    const {id : priceId, subTitle} = req.params;
    console.log(req.body);
    const priceList = await PriceList.updateOne({_id: priceId, subTitle}, {"priseCategory.$.price": 1234567}, { new: true, runValidators: true });
    res.status(StatusCodes.OK).json({priceList});
};
const deletePriceList = async (req, res) => {
    const { id: priceListId } = req.params;

    const image = await Images.findOneAndRemove({_id: priceListId })
    if (!image) {
        throw new NotFoundError(`No priceList with id ${priceListId}`);
    }
    res.status(StatusCodes.OK).send();
};

module.exports = {
    getAllPriceList,
    createPriceList,
    updatePriceListTitle,
    updatePriceListCategory,
    deletePriceList,
}