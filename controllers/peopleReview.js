const PeopleReview = require('../models/PeopleReview');
const { StatusCodes } = require('http-status-codes');

const getAllPeopleReview = async (req, res) => {
    const peopleReview = await PeopleReview.find({});
    res.status(StatusCodes.OK).json({ peopleReview });
}


const addPeopleReview = async (req, res) => {
    const peopleReview = await PeopleReview.create(req.body);
    res.status(StatusCodes.CREATED).json({ peopleReview });
    res.send();
}

module.exports = {
    getAllPeopleReview,
    addPeopleReview,
}