const mongoose = require("mongoose");

const CuttingProcess = new mongoose.Schema({
    thickenss: {
        type: Number,
    },
    Welding_time: {
        type: Number,// 2دقيقة 
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'Profile'
    }
},
    { timeStamp: true }
);

CuttingProcess.pre(/^find/, function (next) {
    this.populate({ // راجعيها ---------------------------------------
        path: 'profile',
        select: 'brandname',
    })
    next()
})

module.exports = mongoose.model("CuttingProcess", CuttingProcess);
