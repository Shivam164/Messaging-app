const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// to generate a random token for resetPasswordToken 
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ContactSchema = new Schema({
    _id : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    image : {
        type : String,
        default : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
});

const UserSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    emailId: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        // when ever we write a query for the user,
        // password will be sent only when specified
        // ( select helps in doing that)
        select: false  
    },
    phoneNo : {
        type : String,
        required : false
    },
    bio : {
        type : String,
        required : false
    },
    image : {
        type : String,
        required : false,
        default :"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    activeChatGroups: {
        type : [String],
        required : false,
        default : []
    },
    allContacts : {
        type : [ContactSchema],
        default : []
    },
    verified : {
        type : Boolean,
        default : false
    },
    resetPasswordToken : {
        type : String
    },
    resetPasswordExpire : {
        type : Date
    },
    registerOTP : {
        type : Number
    },
    registerOTPExpires : {
        type : Date
    }
},{collection : 'User'},{timestamp : true});


UserSchema.pre("save", async function(next){
    // checking whether password is already encrypted or not
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    // encrypting the password
    // this refers to User object
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// creating a method that will check password is matched or not
UserSchema.methods.matchPasswords = async function(password){
    // this will refer to the user with which we are calling this function
    return await bcrypt.compare(password, this.password)
}

// this function will use json web token and return us a assigned token
// this token consist of id of the user jwt_secret and jwt_expire
UserSchema.methods.getSignedToken = function(){
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn : process.env.JWT_EXPIRE })
}

// creating token for reseting the password
// now we will hash this token and save the hash version in resetPasswordToken defined in UserSchema
// resetPasswordToken will be changed only for the user with which are calling this function
UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    
    // Hash token (private key) and save to database
    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    
    // Set token expire date
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
    
    return resetToken;
};


const User = mongoose.model('User',UserSchema);

module.exports = {User, UserSchema};