const mongoose = require("mongoose")
require("dotenv").config();

const url = "mongodb+srv://zuhaibiqbal26:FXYACXkGGcmKdF2w@exercise-tracker-mern-v.holrrt3.mongodb.net/?retryWrites=true&w=majority"

function connection() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
         console.log("database connected")
    })
    .catch(()=>{
        console.log("DB Connection failed")
    })
}

module.exports = connection