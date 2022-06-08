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

router.use(authController.protect);

router
  .route('/')
  .get(getAllreviews)
  .post(authController.restrictTo('user'), setTourUserIds, createReview);
router
  .route('/:id')
  .get(getReview)
  .patch(authController.restrictTo('user', 'admin'), updateReview)
  .delete(authController.restrictTo('user', 'admin'), deleteReview);
module.exports = router;
