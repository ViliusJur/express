const express = require("express")
const router = express.Router()
const {emailValid, passwordsValid, userValid, secretValid} = require("../midleware/middle")

const {register, login, getPost, getPhoto, isSecretValid, createPost} = require("../controllers/mainController")


router.post("/register", emailValid, passwordsValid, userValid, register)
router.post("/login", login)
router.post("/createPost", createPost)
router.post("/getPost", getPost )
router.get("/getPhoto/:secret", secretValid, getPhoto)
router.get("/getIsValidSecret/:secret", secretValid, isSecretValid )

module.exports = router

// const express = require("express")
// const router = express.Router()
// const middle = require("../midleware/middle")

// const {addPost, findPost, registration} = require("../controllers/mainController")
// // const { findOneAndUpdate } = require("../schemas/postSchema")

// router.post("/addPost", addPost)
// router.get("/find/:value?", findPost)

// router.post("/registration", middle, registration)


// module.exports = router

