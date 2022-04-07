const express = require("express");
const router = express.Router();

const { signup, otpVerification, login } = require('../controllers/auth');

router.post('/signup',signup);

router.put('/otpverification', otpVerification);

router.post('/login', login);

module.exports = router;