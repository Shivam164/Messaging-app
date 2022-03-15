const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OneOnOneChatSchema = new Schema({
    personId1:{
        type : String,
        required : true
    },
    person2Id: {
        type : String,
        required : true
    },
    listOfMessage : {
        type : [MessageSchema],
        required : false,
        default : []
    },
    OneOnOneChatId : {
        type : Number,
        required : true
    }
});

const OneOnOneChat = mongoose.model('OneOnOneChat',OneOnOneChatSchema);

module.exports = OneOnOneChat;