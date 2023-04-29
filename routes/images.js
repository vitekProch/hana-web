const express = require('express');
const router = express.Router();
const {
    getAllImages,
    getImagesByCategory,
    createImage,
    updateImage,
    deleteImage,
} = require('../controllers/images');

router.route('/').get(getAllImages).post(createImage);
router.route('/:id').patch(updateImage).delete(deleteImage);
router.route('/:category').get(getImagesByCategory);
module.exports = router;