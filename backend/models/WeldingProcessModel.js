
const mongoose = require("mongoose");

const WeldingProcessSchema = new mongoose.Schema({
    Welding_Allowance: {
        type: Number,
        default: 6,
    },
    Welding_time: {
        type: Number,
    },
    profiles: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }]
},
    { timestamps: true }
);

WeldingProcessSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'profiles',
        select: 'brandname',
    });
    next();
});

module.exports = mongoose.model("WeldingProcess", WeldingProcessSchema);
