const  mongoose = require("mongoose")

const publicationSchema = new mongoose.Schema({
    name:{type:String,required:true}

},
{
    timestamps:true
})

module.exports = mongoose.model("publication",publicationSchema)