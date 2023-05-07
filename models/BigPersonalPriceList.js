const mongoose = require('mongoose');

const BigPriceListSchema = new mongoose.Schema({
    priseTitle:{
        type: String,
        required: [true, 'Prosím zadejte titulek.'],
    },
    priseCategory:[{
        subTitle:{
            type: String,
            required: [true, 'Prosím zadejte název balíčku.'],
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

BigPriceListSchema.pre('save', function (next) {
    if (this.text && 0 === this.foos.length) {
      this.foos = undefined;                                                                                                                                   
    }
    next();
  })
module.exports = mongoose.model('BigPriceList', BigPriceListSchema);