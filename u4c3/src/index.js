const express = require("express")
const connect = require("./config/db")
const userController = require("./controllers/user.controller")
const bookController = require("./controllers/book.controller")
const publicationController = require("./controllers/publication.controller")

const comment = require("./controllers/comment.controller")
const app = express()

app.use(express.json())

app.use("/user",userController)
app.use("/books",bookController)
app.use("/publication",publicationController)








app.listen(7000,async(req,res)=>{
    try{
        await connect
        console.log("Listening on port 7000")
    }
    catch(e){
        console.log(e.message)
    }
})