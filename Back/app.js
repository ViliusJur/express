const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./routes/router")

mongoose.connect("mongodb+srv://admin:admin@cluster0.mm63och.mongodb.net/test")
    .then(() => {
        console.log('CONNECTED OK')
    }).catch(e => {
    console.log('CONNECTION ERROR')
})

app.use(cors())

app.use(express.json())

app.listen(4000)

app.use("/", mainRouter)

const bcrypt = require("bcrypt")

async function createHash() {
    let myPassword = "slaptas123"

    const hash = await bcrypt.hash(myPassword, 10)

    console.log(hash)
}

async function comparePass() {
    const myPassword = "slaptas123"
    const hash = "$2b$10$db7YZbg5wXSn1doZ7F4vyON.dsbDmWhwmlAatI2Vz9.0heFXd70CS"

    const compare = await bcrypt.compare(myPassword, hash)

    console.log(compare)
}

comparePass()