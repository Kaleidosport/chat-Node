const MONGOOSE = require("mongoose")

const MESSAGESCHEMA = new MONGOOSE.Schema({
    message: {
        type: String,
        maxlength: 280,
        required: true
    }
})

const MESSAGE = MONGOOSE.model("message", MESSAGESCHEMA)
module.exports = MESSAGE