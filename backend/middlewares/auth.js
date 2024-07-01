const expressAsyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

// protect handler 
exports.auth = expressAsyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) {
        return next(new ApiError('you are not login, please login ', 401))
    }
    const decode = jwt.verify(token, process.env.SKERET_KEY)
    next()
});

// Admin authentication
exports.isAdminAuth = expressAsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    ('Authorization Header:', authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(new ApiError('You are not logged in, please log in', 401));
    }
    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.SKERET_KEY);
        req.user = await User.findById(decode.id);
        if (!req.user) {
            return next(new ApiError('User not found, please log in', 401));
        }

        if (req.user.role !== 'Admin') {
            return next(new ApiError('Not authorized for this resource!', 403));
        }

        next();
    } catch (err) {
        console.error('Token verification error:', err);
        return next(new ApiError('Invalid or expired token', 401));
    }
});

exports.isSuperAdminAuthenticated = expressAsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(new ApiError("المستخدم غير مصدق عليه!", 400));
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.SKERET_KEY);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ApiError("المستخدم غير موجود!", 404));
        }
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return next(new ApiError("توكن غير صالح!", 401));
        } else if (error.name === 'TokenExpiredError') {
            return next(new ApiError("توكن منتهي الصلاحية!", 401));
        } else {
            return next(new ApiError("حدث خطأ أثناء المصادقة!", 500));
        }
    }
});


