const express = require('express');
const {
  getAllreviews,
  createReview,
  deleteReview
} = require('../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

// POST /tour/:id/reviews
// GET /tour/:id/reviews
// POST /reviews
router
  .route('/')
  .get(getAllreviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    createReview
  );
router.route('/:id').delete(deleteReview);
module.exports = router;
