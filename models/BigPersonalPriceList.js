const mongoose = require('mongoose');

const BigPriceListSchema = new mongoose.Schema({
    priseTitle:{
        type: String,
        required: [true, 'Prosím zadejte titulek.'],
    },
    priseCategory:[{
        subTitle:{
            type: String,
            required: [true, 'Prosím zadejte podtitulek.'],
        }, 
        text:{
            type: Array,
            required: [true, 'Prosím zadejte popis.']
        }, 
        price:{
            type: Number,
            required: [true, 'Prosím zadejte cenu.'],
        },
    }],

    
},{timestamps:true});

module.exports = mongoose.model('BigPriceList', BigPriceListSchema);