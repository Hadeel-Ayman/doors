
const mongoose = require("mongoose");

const Company = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    previewImage: {
        type: String,
    },
    slug: {
        type: String,
        lowercase: true,
    },
    size: {
        type: String,
    },
    material: {
        type: mongoose.Schema.ObjectId,
        ref: 'Material',
        required: [true, 'Material is required']
    },
}, { timestamps: true }); // تأكد من تصحيح التسمية إلى timestamps

Company.pre(/^find/, function (next) {
    this.populate({
        path: 'material',
        select: 'type'
    });
    next();
});

module.exports = mongoose.model("Company", Company);
