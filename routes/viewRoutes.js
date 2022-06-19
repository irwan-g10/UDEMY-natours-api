const express = require('express');
const authController = require('../controllers/authController');
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData
} = require('../controllers/viewController');

const router = express.Router();
authController.isLoggedIn;

// 3) ROUTES
router.get('/', authController.isLoggedIn, getOverview);
router.get('/tours/:slug', authController.isLoggedIn, getTour);
router.get('/login', authController.isLoggedIn, getLoginForm);
router.get('/me', authController.protect, getAccount);
router.post('/submit-user-data', authController.protect, updateUserData);

module.exports = router;
