const express = require("express");
const router = express.Router();

const { accessGroup, fetchChats } = require("../controllers/group");
const {allMessages, sendMessages } = require('../controllers/messages');

// to get all messages of a particular chat
router.post('/allMessages', allMessages);
// to send messages
router.post('/sendMessages', sendMessages);
// Create or fetch one to one group
router.post('/accessGroup', accessGroup);
// Fetching info of all the chats with which user is chatting ( to show on left column )
router.post('/fetchChats', fetchChats);

module.exports = router;