const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = require('./Messages');
const UserSchema = require('./User');

const GroupSchema = new Schema({
    chatName: {
        type: String,
        trim: true 
    },
    isGroupChat: { 
        type: Boolean, 
        default: false 
    },
    users: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" 
        }
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages",
    },
    groupAdmin: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
},{collection : 'Group'},{timestamp : true});

const Group = mongoose.model('Group',GroupSchema);

module.exports = { Group, GroupSchema};