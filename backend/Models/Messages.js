const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('./User');

const MessagesSchema = new Schema({
    byWhom : {
        type : UserSchema,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    to : {
        type : UserSchema,
        required : true
    }
},{timestamps : true});

const Messages = mongoose.model('Messages',MessagesSchema);

module.exports = { Messages, MessagesSchema };