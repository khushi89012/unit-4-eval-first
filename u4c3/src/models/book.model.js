const  mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    likes :{type:Number,required:true},
    coverImg :{type:String,required:true},
    content: {type:String,required:true},

},
{
    timestamps:{type}
})