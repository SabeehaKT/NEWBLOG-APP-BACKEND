const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "gender":{type:String,required:true},
        "email":{type:String,required:true},
        "pass":{type:String,required:true}
    }
)

const blogappmodel = mongoose.model("blogs",schema);
module.exports={blogappmodel}