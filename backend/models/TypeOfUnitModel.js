const mongoose = require("mongoose")

const TypeOfUnit = new mongoose.Schema({
    type: {
        type: String,
    },
}, { timeStamp: true })

module.exports = mongoose.model("TypeOfUnit", TypeOfUnit)