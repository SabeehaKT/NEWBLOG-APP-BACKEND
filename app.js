const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {blogappmodel} = require("./models/blogs")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/signup",(req,res)=>{
    res.json({"status":"signedup"})
})


app.listen(8080,()=>{
    console.log("server started")
})