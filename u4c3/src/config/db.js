const mongoose = require("mongoose")


module.exports = ()=>{

    return mongoose.connect(" mongodb+srv://khushi890:khushi890@cluster0.cvht7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}