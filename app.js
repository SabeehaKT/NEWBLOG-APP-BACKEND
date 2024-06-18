const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcryptjs = require("bcryptjs")
const {blogappmodel} = require("./models/blogs")

const app = express()
app.use(cors())
app.use(express.json())

const generateHashedPassword = async(password)=>{
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password,salt)
}

app.post("/signup", async (req,res)=>{
    let input = req.body
    let hashedPassword = await generateHashedPassword(input.pass)
    console.log(hashedPassword)
    input.pass = hashedPassword
    let signup = new blogappmodel(input)
    signup.save()
    res.json({"status":"success"})
})

app.post("/login",(req,res)=>{
    res.json({"status":"loggedin"})
})

app.listen(8080,()=>{
    console.log("server started")
})