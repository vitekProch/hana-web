const express = require('express');
const router = express.Router();

const {
    getAllPriceList,
    createPriceList,
    updatePriceList,
    deletePriceList,
} = require('../controllers/smallPersonalPriceList');

router.route('/').get(getAllPriceList).post(createPriceList);
router.route('/:id').patch(updatePriceList).delete(deletePriceList);
router.route('/:id/:subTitle').delete(deletePriceList);

module.exports = router;