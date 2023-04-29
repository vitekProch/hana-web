const express = require('express');
const router = express.Router();

const {
    getAllPriceList,
    createPriceList,
    updatePriceListTitle,
    updatePriceListCategory,
    deletePriceList,
} = require('../controllers/priceList');

router.route('/').get(getAllPriceList).post(createPriceList);
router.route('/:id').patch(updatePriceListTitle).delete(deletePriceList);
router.route('/:id/:subTitle').patch(updatePriceListCategory).delete(deletePriceList);

module.exports = router;