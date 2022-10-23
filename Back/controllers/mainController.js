const userSchema = require("../schemas/userSchema")
const postSchema = require("../schemas/postSchema")
const sendRes = require("../modules/universalRes")
const {uid} = require("uid")
const bcrypt = require("bcrypt")

module.exports = {

    register: async (req, res) => {
        const {email, passOne: password, photo} = req.body

        const hash = await bcrypt.hash(password, 10)

        new userSchema({
            email,
            password: hash,
            secret: uid(),
            photo
        }).save().then(() => {
            sendRes(res, false, "all good", null)
        })
    },
    login: async (req, res) => {
        const {email, password } = req.body
        
        const userExists = await userSchema.findOne({email})

        if(userExists) {

            const compare = await bcrypt.compare(password, userExists.password)

            if(compare) {
                return sendRes(res, false, "all good", {secret: userExists.secret})
            } 
            
        }

        return sendRes(res, true, "bad credentials", null)
    },

    isSecretValid: async (req, res) => {
        const {secret} = req.params

        const user = await userSchema.findOne({secret})

        return sendRes(res, false, "", !!user);
    },

    getPhoto: async (req, res) => {
        const {secret} = req.params

        const user = await userSchema.findOne({secret})

        return sendRes(res, false, "all good", {photo: user.photo})
    },

    createPost: async (req, res) => {
        const {title, image} = req.body

        new postSchema({
            title,
            image
        }).save().then(() => {
            sendRes(res, false, "Post Created", null)
        })
    },

    getPost: async (req, res) => {
        const {title, image} = req.params

        const user = await postSchema.findOne({title})

        return sendRes(res, false, "all good", {title: user.title})
    }

    }






