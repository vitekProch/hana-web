const express = require('express');
const router = express.Router();

const {
    getAllPriceList,
    createPriceList,
    deletePriceList,
    updatePriceList,
} = require('../controllers/bigPersonalPriceList');

router.route('/').get(getAllPriceList).post(createPriceList);
router.route('/:id').delete(deletePriceList).patch(updatePriceList);
router.route('/:id/:subTitle').delete(deletePriceList);

module.exports = router;