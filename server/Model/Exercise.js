const mongoose = require("mongoose")

const Exercise = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    des:{
        type:String
    },

    type:{
        type:String,
        enum:["Running","Walking","Cycling","Swimming","Hiking"],
        required:true
    },

    duration:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Exercise",Exercise)