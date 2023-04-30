const mongoose = require('mongoose');

const SmallPriceListSchema = new mongoose.Schema({
    priseTitle: {
        type: String,
        required: [true, 'Prosím zadejte titulek.'],
    },
    pricePackage: [{
        subTitle: {
            type: String,
            required: [true, 'Prosím zadejte podtitulek.'],
        },
        quantity: {
            type: Number,
            required: [true, 'Prosím zadejte počet fotek.']
        },
        price: {
            type: Number,
            required: [true, 'Prosím zadejte cenu.'],
        },
    }],


}, { timestamps: true });

module.exports = mongoose.model('SmallPriceList', SmallPriceListSchema);