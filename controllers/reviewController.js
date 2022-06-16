const Review = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');

const factory = require('./handlerFactory');

const getAllreviews = factory.getAll(Review);
// const getAllreviews = catchAsync(async (req, res, next) => {
//   let filter = {};
//   if (req.params.tourId) filter = { tour: req.params.tourId };
//   const review = await Review.find(filter);
//   res.status(200).json({
//     status: 'success',
//     results: review.length,
//     data: {
//       review
//     }
//   });
// });

const getReview = factory.getOne(Review);
// const getReview = catchAsync(async (req, res, next) => {
//   const review = await Review.aggregate([
//     {
//       $match: { tour: req.params.id }
//     }
//   ]);
//   res.status(200).json({
//     status: 'success',
//     data: {
//       review
//     }
//   });
// });
const setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

const createReview = factory.createOne(Review);
// const createReview = catchAsync(async (req, res, next) => {
//   const newReview = await Review.create(req.body);

//   res.status(201).json({
//     status: 'success',
//     data: {
//       review: newReview
//     }
//   });
// });

const updateReview = factory.updateOne(Review);
const deleteReview = factory.deleteOne(Review);

module.exports = {
  getAllreviews,
  createReview,
  getReview,
  deleteReview,
  updateReview,
  setTourUserIds
};
