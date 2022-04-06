const express = require("express");
const router = express.Router();

const { findContact } = require('../controllers/user');
const { protect } = require('../middleware/auth');

router.get('/findContact', protect, findContact);

module.exports = router;