const jwt = require('jsonwebtoken');
const { User } = require("../Models/User");
const ErrorResponse = require('../utils/errorResponse');

// we can use this piece of middleware with different routes to check whether the user is authorized or not.
exports.protect = async ( req, res, next) => {
    let token;
    console.log(req.headers);
    // first of all we are checking whether the response has authorization string or not
    // and after that we are checking whether it starts with 'Bearer' or not
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }

    console.log(token);

    // if token is not present
    if(!token){
        return next(new ErrorResponse("not authorized to access this route", 401));
    }

    try{
        // jwt will verify the taken based on the secret token in the env file
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const user = await User.findById(decoded.id);

        if(!user){
            return next(new ErrorResponse("No user found with this Id", 404));
        }
        req.user = user;
        next(); 
    
    }catch(error){
        console.log(error);
        return next(new ErrorResponse("not authorized to access this route", 404));
    
    }
}