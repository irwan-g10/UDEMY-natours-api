const express = require('express');
const {
  getAllreviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview
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
    setTourUserIds,
    createReview
  );
router
  .route('/:id')
  .get(getReview)
  .delete(deleteReview)
  .patch(updateReview);
module.exports = router;
