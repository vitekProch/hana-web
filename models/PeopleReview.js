const mongoose = require('mongoose');

const PeopleReview = new mongoose.Schema({
    url:{
        type: String,
        required: [true, 'Zadejte prosím umístění souboru.'],
    },
    alt:{
        type: String,
        required: [true, 'Zadejte prosím slovní popis obrázku.'],
    },
},{timestamps:true});


module.exports = mongoose.model('PeopleReview', PeopleReview);