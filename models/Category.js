const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Zadejte prosím název kategorie.'],
        unique: true,
    },
    categoryImage:{
        type: String,
        required: [true, 'Vyberte prosím obrázek.'],
        unique: true,
    }
});

module.exports = mongoose.model('Category', CategorySchema);