const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = require('./Messages');
const UserSchema = require('./User');

const GroupSchema = new Schema({
    groupName: { 
        type: String,
        trim: true
    },
    users: [
        { type: mongoose.Schema.Types.ObjectId,
            ref: "User" 
        }
    ],
    isGroupChat : {
        type : Boolean,
        default : false
    },
    groupImage : {
        type : String,
        required : false,
        default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    groupDescription: {
        type : String,
        required : true,
        default : ""
    },
    groupLastMessage : {
        type : MessageSchema,
        required : true
    }
});

const Group = mongoose.model('Group',GroupSchema);

module.exports = { Group, GroupSchema};