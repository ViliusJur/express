const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("type11UsersNew", userSchema)

module.exports = exportUser