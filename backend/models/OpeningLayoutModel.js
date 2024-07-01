const mongoose = require("mongoose")

const OpeningLayout = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'image is required']
    },
    previewImage: {
        type: String,
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    fanlight: {
        type: mongoose.Schema.ObjectId,
        ref: 'Fanlight'
    },
    layout: {
        type: mongoose.Schema.ObjectId,
        ref: 'Layout'
    }
}, { timestamps: true })

OpeningLayout.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'fanlight',
        select: 'title',
    }).populate({
        path: 'layout',
        select: 'title',
    })
    next()
})

module.exports = mongoose.model("OpeningLayout", OpeningLayout)