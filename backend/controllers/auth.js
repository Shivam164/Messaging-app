const { User } = require('../Models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.signup = async function(req, res, next){
    const { name, emailId, phoneNo, bio, image, password } = req.body;

     console.log(req.body);

    try{

        // Checking for already verified user
        const _user = await User.findOne({emailId, verified : true});

        if(_user){
            return next(new ErrorResponse("Entered email is already in use", 409));
        }

        // generating a random 6 DIGIT OTP
        const min = 100001;
        const max = 999999;
        const a = Math.floor(Math.random() * (max - min + 1)) + min;

        // checking whehter a non verified user exist or not
        const nonVerifiedUser = await User.findOne({emailId, verified : false});
        let user;

        if(!nonVerifiedUser){   
            user = await User.create({
                name,
                emailId,
                phoneNo,
                bio,
                image,
                password,
                verified : false,
                registerOTP : a,
                registerOTPExpires : Date.now() + 10 * (60 * 1000)
            });
        }else{
            console.log(nonVerifiedUser);
            nonVerifiedUser.registerOTP = a;
            nonVerifiedUser.registerOTPExpires = Date.now() + 10 * (60 * 1000);
            user = nonVerifiedUser;
            await nonVerifiedUser.save();
        }
        
        // message for email
        const message = `
            <h1>This is OTP for your sign up in Messaging app</h1>
            <p>${a}</p>
         `;

        // sending email
        try{
            await sendEmail({
                to : user.emailId,
                subject : "Your One Time Password for Messaging App",
                text : message
            });

            res.status(200).json({
                success : true,
                data : "Email sent"
            })
         }catch(error){
            console.log("error1");
            return next(new ErrorResponse("Email could not be sent", 500));
         }

    }catch(error){
        console.log(error.message);
        next(error);
    }
}

exports.otpVerification = async function(req, res, next){
    const { otp, emailId } = req.body;
    const user = await User.findOne({emailId});
    console.log("otp => ",otp);
    console.log("email => ", emailId);
    console.log(user);
    if(user.registerOTP == otp){
        const _user = await User.findOne({emailId, registerOTPExpires : {$gt : Date.now()} });
        if(!_user){
            return next(new ErrorResponse("OTP is expired",410));
        }else{
            _user.verified = true;
            _user.save();
            sendToken(_user, 200, res);
        }
    }else{
        return next(new ErrorResponse("Invalid OTP", 409));
    }
}

exports.login = async function(req, res, next){
    const {emailId, password} = req.body;
    console.log(emailId);
    console.log(password);
    try{
        const user = await User.findOne({emailId}).select("+password");
        console.log(user);
        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
            return next(new ErrorResponse("Invalid Credentials", 401));
        }
        const _user = await User.findOne({emailId});
        sendToken(_user, 200, res);
    }catch(error){
        console.log(error);
        next(error);
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({success : true, token, user});
}