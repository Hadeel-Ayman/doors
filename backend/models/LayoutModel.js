const mongoose = require("mongoose")

const Layout = new mongoose.Schema({
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
    openingSystem: {
        type: mongoose.Schema.ObjectId,
        ref: 'OpeningSystem',
        required: [true, 'title is required']
    },
}, { timeStamp: true })

Layout.pre(/^find/, function (next) {
    this.populate({ 
        path: 'openingSystem',
        select: 'type',
    })
    next()
})

module.exports = mongoose.model("Layout", Layout)