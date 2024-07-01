const mongoose = require("mongoose")

const Sash = new mongoose.Schema({
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
        required: [true, 'Length_of_Beam is required'],
        ref: 'Frame'
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    from: {
        type: Number,
        required: [true, 'from is required']
    },
    height: {
        type: Number,
        required: [true, 'height is required']
    },
    weightPermeter: {
        type: Number,
        required: [true, 'weight is required']
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
        ref: 'Profile',
        // required: [true, 'profile is required']
    }

}, { timeStamp: true })

Sash.pre(/^find/, function (next) { // قبل ما تنفذ ال find نفذلي ال populate 
    this.populate({
        path: 'profile',
        select: 'brandname',
    }).populate({
        path: 'Length_of_Beam',
        select: 'Length_of_Beam',
    })
    next()
})



module.exports = mongoose.model("Sash", Sash)
