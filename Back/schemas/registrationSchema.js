const mongoose = require("mongoose")
const Schema = mongoose.Schema

const registrationSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    passwordOne: {
        type: String,
        required: true
    },
    passwordTwo: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("midleware", registrationSchema)

module.exports = exportUser