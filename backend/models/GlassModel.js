const mongoose = require("mongoose");

const Glass = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code: {
        type: String,
        required: [true, 'code is required']
    },
    glass_density: {
        type: Number,
        required: [true, 'glass_density is required']
    },
    thickness: {
        type: Number,
        required: [true, 'thickness is required']
    },
    specification: {
        type: String,
        required: [true, 'specification is required']
    },
    pricePermeterSqure: {
        type: Number,
        required: [true, 'price is required']
    },
    weightPermeterSqure: {
        type: String,
        required: [true, 'weight is required']
    },
    glassColorIds: [{  // Change the field to an array of ObjectIds
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GlassColor' // Reference the GlassColor model
    }]
}, { timestamps: true });

Glass.pre(/^find/, function (next) {
    this.populate({
        path: 'glassColorIds',  // Update the field name to match the schema
        select: 'title', // Select the fields you want to populate
    });
    next();
});

module.exports = mongoose.model("Glass", Glass);
