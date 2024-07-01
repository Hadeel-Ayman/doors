const mongoose = require("mongoose")

const Fanlight = new mongoose.Schema({
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
    layout: {
        type: mongoose.Schema.ObjectId,
        ref: 'Layout',
    }
}, { timeStamp: true })


Fanlight.pre(/^find/, function (next) {
    this.populate({
        path: 'layout',
        select: 'title',
    })
    next()
})

module.exports = mongoose.model("Fanlight", Fanlight)