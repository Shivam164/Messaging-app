const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId : {
        type : String,
        requried : true
    },
    name:{
        type : String,
        required : true
    },
    emailId: {
        type : String,
        required : true
    },
    phoneNo : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    online : {
        type : Boolean,
        requried : false 
    },
    bio : {
        type : String,
        required : false
    },
    avatar : {
        type : String,
        required : false,
        default : 0
    },
    activeChatsGroup: {
        type : [String],
        required : true,
        default : []
    },
    activeChatOne : {
        type : String,
        required : true,
        default : []
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;