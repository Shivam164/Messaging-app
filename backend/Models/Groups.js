const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupId:{
        type : String,
        required : true
    },
    memberId: {
        type : String,
        required : true
    },
    groupAvatar : {
        type : Number,
        required : false,
        default : 0
    },
    groupDescription: {
        type : String,
        required : true,
        default : ""
    },
    groupMessage : {
        type : [MessageSchema],
        required : false,
        default : []
    }
});

const Group = mongoose.model('Group',GroupSchema);

module.exports = Group;