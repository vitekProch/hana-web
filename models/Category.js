const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Zadejte prosím název kategorie.'],
        unique: true,
    },
});

module.exports = mongoose.model('Category', CategorySchema);