const express = require("express");
const router = express.Router();

const { findContact, addContact } = require('../controllers/user');
const { protect } = require('../middleware/auth');

router.post('/findContact', findContact);

router.put('/addContact', addContact);

module.exports = router;