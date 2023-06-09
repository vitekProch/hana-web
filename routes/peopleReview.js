const express = require('express');
const router = express.Router();
const {
    getAllPeopleReview,
    addPeopleReview,
} = require('../controllers/peopleReview');

router.route('/').get(getAllPeopleReview).post(addPeopleReview);

module.exports = router;