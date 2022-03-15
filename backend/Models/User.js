const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        type : Number,
        required : false,
        default : 0
    },
    activeChats : {
        type : [String],
        required : true,
        default : null
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;