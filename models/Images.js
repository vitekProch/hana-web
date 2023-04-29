const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
    url:{
        type: String,
        required: [true, 'Zadejte prosím umístění souboru.'],
    },
    alt:{
        type: String,
        required: [true, 'Zadejte prosím slovní popis obrázku.'],
    },
    category:{
        type: String,
        required: [true, 'Zadejte prosím kategorii.'],
    },
},{timestamps:true});


module.exports = mongoose.model('Images', ImagesSchema);