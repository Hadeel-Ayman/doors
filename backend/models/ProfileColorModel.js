const mongoose = require("mongoose")

const ProfileColor = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'image is required']
    },
    previewImage: {
        type: String,
        // required: [true, 'image is required']
    },
    title: {
        type: String,
        required: [true, 'title is required'],
        unique: true,
    },
}, { timeStamp: true })


module.exports = mongoose.model("ProfileColor", ProfileColor)