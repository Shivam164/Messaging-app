const express = require("express");
const router = express.Router();


const { findContact, addContact, removeContact } = require('../controllers/user');
const { protect } = require('../middleware/auth');

router.post('/findContact', findContact);
router.put('/addContact', addContact);
router.put('/removeContact', removeContact);


module.exports = router;