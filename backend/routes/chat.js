const express = require("express");
const router = express.Router();

const { accessGroup, fetchChats } = require("../controllers/group");

router.post('/accessGroup', accessGroup);
router.get('/fetchChats', fetchChats);

module.exports = router;