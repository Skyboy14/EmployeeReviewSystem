const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review_controller');

//  new review
router.get('/newReview/:id', reviewController.newReview);

module.exports = router;