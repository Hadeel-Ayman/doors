const mongoose = require("mongoose")

const GlazingBead = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code: {
        type: String,
        required: [true, 'code is required']
    },
    Length_of_Beam: {
        type: mongoose.Schema.ObjectId,
        ref: 'Frame'
    },
    height: {
        type: Number,
        required: [true, 'height is required']
    },
    weightPermeter: {
        type: Number,
        required: [true, 'weight is required']
    },
    colours: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile',
        populate: {
            path: 'profileColor',
            select: 'title'
        }
    },
    pricePermeter: {
        type: Number,
        required: [true, 'price is required']
    },
    price_beam: {
        type: Number, // حساب 
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }

}, { timeStamp: true })

GlazingBead.pre(/^find/, function (next) {
    this.populate({
        path: 'Length_of_Beam',
        select: 'Length_of_Beam'
    }).populate({
        path: 'profile',
        select: 'brandname profileColor',
        populate: {
            path: 'profileColor',
            select: 'title' // اختيار العنوان فقط
        }
    }).populate({
        path: 'colours',
        select: 'profileColor',
        populate: {
            path: 'profileColor',
            select: 'title' // اختيار العنوان فقط
        }
    });
    next();
});

module.exports = mongoose.model("GlazingBead", GlazingBead)
