const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    MsgId : {
        type : String,
        required : true
    },
    byWhom : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    }
},{timestamps : true});

const Messages = mongoose.model('Messages',MessagesSchema);

module.exports = { Messages, MessagesSchema };