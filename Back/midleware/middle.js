const isEmail = require("is-email")
const userSchema = require("../schemas/userSchema")
const sendRes = require("../modules/universalRes")

module.exports = {
    emailValid: (req, res, next) => {
        const {email} = req.body
        if(!isEmail(email)) return sendRes(res, true, "bad email", null)
        next()
    },
    passwordsValid: (req, res, next) => {
        const {passOne, passTwo} = req.body

        if(passOne !== passTwo) return sendRes(res, true, "passwords do not match", null)
        if(passTwo.length < 5 || passTwo.length > 20) return sendRes(res, true, "bad password length", null)

        next()
    },
    userValid: async (req, res, next) => {
        const {email} = req.body

        const userExists = await userSchema.findOne({email})

        console.log(userExists)

        if(userExists) {
            return sendRes(res, true, "user already exists", null)
        }

        next()
    },
    secretValid: async (req, res, next) => {
        const {secret} = req.params

        const userExists = await userSchema.findOne({secret})

        if(!userExists) return  sendRes(res, true, "bad user secret", null)

        next()
    }
}
    


// const isEmail = require("is-email")

// module.exports = (req, res, next) => {
//     const {email, passwordOne, passwordTwo} = req.body

//     if(!isEmail(email)) {
//         return res.send({error: true, message: "bad email"})
//     }

//     if(passwordOne.length < 5 || passwordOne.length > 20) {
//         return res.send({error: true, message: "bad password length"})
//     }

//     if(passwordOne !== passwordTwo) {
//         return res.send({error: true, message: "passwords does not match"})
//     }

//     let hasNoUpperCase = true

//     passwordOne.split("").map(x => {
//         if(x === x.toUpperCase()) hasNoUpperCase = false
//     })

//     if(hasNoUpperCase) {
//         return res.send({error: true, message: "password should have at least one upperCase letter"})
//     }

//     let hasNoNumbers = true

//     passwordOne.split("").map(x => {
//         if(!isNaN(Number(x))) hasNoNumbers = false
//     })

//     if(hasNoNumbers) {
//         return res.send({error: true, message: "password should have at least one number"})
//     }

//     next()
    
// }