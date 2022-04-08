const express = require("express");
const router = express.Router();

const { findContact } = require('../controllers/user');
const { protect } = require('../middleware/auth');

router.post('/findContact', findContact);

module.exports = router;