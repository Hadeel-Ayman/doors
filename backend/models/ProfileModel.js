
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    brandname: {
        type: String,
        required: [true, 'Brandname is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    previewImage: {
        type: String,
    },
    desc1: {
        type: String,
    },
    desc2: {
        type: String,
    },
    desc3: {
        type: String,
    },
    surcharge: {
        type: String,
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: [true, 'Company is required']
    },
    system: {
        type: mongoose.Schema.ObjectId,
        ref: 'OpeningSystem',
        required: [true, 'System is required']
    },
    material: {
        type: mongoose.Schema.ObjectId,
        ref: 'Material',
        required: [true, 'Material is required']
    },
    profileColor: {
        type: mongoose.Schema.ObjectId,
        ref: 'ProfileColor',
        required: [true, 'Profile Color is required']
    },
}, { timestamps: true })

profileSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'company',
        select: 'name',
    }).populate({
        path: 'system',
        select: 'type'
    }).populate({
        path: 'material',
        select: 'type'
    }).populate({
        path: 'profileColor',
        select: 'title'
    });
    next()
})

module.exports = mongoose.model("Profile", profileSchema)
