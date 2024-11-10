const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const app = express()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
app.use(express.json())
app.use("/api/v1/mentor")
app.use("/api/v1/mentee")
app.get("/", function (req, res) {
    res.json({ msg: "Hello world" })
})

async function main() {
    try {
        await mongoose.connect(MONGODB_URL)
    } catch (err) {
        console.log('Error while connecting');
    }

}
app.listen(PORT, () => {
    console.log('App is running at port', PORT);



})
main()