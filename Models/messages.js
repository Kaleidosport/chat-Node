const MONGOOSE = require("mongoose")

const MESSAGESCHEMA = new MONGOOSE.Schema({
    message: {
        type: String,
        maxlength: 280,
        required: true
    },
    username: {
        type: String,
        minlength: 3,
        maxlength: 24,
        match: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
        default: "Guest",
        required: true
    },
    time: {
        type: String,
        default: new Date().toLocaleString("en-BE"),
        required: true
    }
})

const MESSAGE = MONGOOSE.model("message", MESSAGESCHEMA)
module.exports = MESSAGE