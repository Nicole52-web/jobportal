const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//check if user is authenticated
exports.isAuthenticated =async (req, res, next) => {
    const { token } = req.cookies;
    //validate if token exists
    if(!token){
        return next(new ErrorResponse('You have to login!', 401));
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(new ErrorResponse('You have to login!', 401));
    }
}


//admin middleware
exports.isAdmin = (req, res, next) =>{
    if(req.user.role === 0){
        return next(new ErrorResponse("Acces denied, you are not an admin", 401));
    }
    next();
}