const mongoose = require("mongoose")

const Reinforcementsteel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code: {
        type: String,
        required: [true, 'code is required']
    },
    // Length_of_Beam: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'Frame'
    // },
    thickness: {
        type: Number,
        required: [true, 'Thickness is required']
    },
    weightPermeter: {
        type: Number,
        required: [true, 'Weight is required']
    },
    pricePermeter: {
        type: Number,
        required: [true, 'price is required']
    },
    price_beam: {
        type: Number, // حساب 
    },
    sash: {
        type: mongoose.Schema.ObjectId,
        ref: 'Sash'
    },
    frame: {
        type: mongoose.Schema.ObjectId,
        ref: 'Frame'
    },
    floatingMullion: {
        type: mongoose.Schema.ObjectId,
        ref: 'FloatingMullion'
    },
    mullion: {
        type: mongoose.Schema.ObjectId,
        ref: 'Mullion'
    }
    // Reinforcement checkbox type belongs to the frame and sash and mullion and other 

}, { timestamps: true })

Reinforcementsteel.pre(/^find/, function (next) {
    this
    // .populate({ // راجعيها ---------------------------------------
    //     path: 'Length_of_Beam',
    //     select: 'Length_of_Beam',
    // })
    .populate({
        path: 'sash',
        select: 'name',
    }).populate({
        path: 'frame',
        select: 'name Length_of_Beam',
    }).populate({
        path: 'floatingMullion',
        select: 'name',
    }).populate({
        path: 'mullion',
        select: 'name',
    })
    next()
})
module.exports = mongoose.model("Reinforcementsteel", Reinforcementsteel)
