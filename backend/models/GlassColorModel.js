const mongoose = require("mongoose")

const GlassColor = new mongoose.Schema({
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
    plus: {
        type: Number,
        required: [true, 'plus is required']
    }
}, { timeStamp: true })

module.exports = mongoose.model("GlassColor", GlassColor)