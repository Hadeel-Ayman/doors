
const mongoose = require("mongoose");

const OpeningSystemSchema = new mongoose.Schema({
    type: {
        type: [String], // multi choice type
        required: [true, 'type is required']
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    previewImage: {
        type: String,
    },
    from: {
        type: Number,
        required: [true, 'from is required']
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: [true, 'Company is required']
    },
}, { timestamps: true });

OpeningSystemSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'company',
        select: 'name'
    });
    next();
});

module.exports = mongoose.model("OpeningSystem", OpeningSystemSchema);
