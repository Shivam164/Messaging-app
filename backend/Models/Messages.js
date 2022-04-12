const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User.js');

const MessagesSchema = new Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    text : {
        type : String,
        required : true
    },
    group : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group" 
    }
},{timestamps : true});

const Messages = mongoose.model('Messages',MessagesSchema);

module.exports = { Messages, MessagesSchema };