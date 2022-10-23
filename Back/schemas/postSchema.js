const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const exportPost = mongoose.model("type11Post", postSchema)

module.exports = exportPost