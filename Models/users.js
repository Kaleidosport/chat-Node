const MONGOOSE = require("mongoose")

module.exports = () => {
    let UsersSchema = MONGOOSE.Schema({
        username: {
            type: String,
            minlength: 3,
            maxlength: 24,
            match: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
            required: true
        },
        email: {
            type: String,
            minlength: 8,
            maxlength: 96,
            match: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,8})$/,
            required: true
        },
        age: {
            type: Number,
            min: 12,
            required: true
        },
        password: {
            type: String,
            match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/,
            required: true
        },
        passwordAgain:{
            type: String,
            match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/,
            required: true
        }
    })
    return MONGOOSE.model("UsersSchema", UsersSchema)
}