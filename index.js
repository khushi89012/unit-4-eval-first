const express = require("express");
const app = express();


app.use(logger)
app.get("/books",function(req,res){

return res.send({route:"/books"})

})

app.get("/libraries",checkpermission_1("librarian") ,function(req,res){

    return res.send({route:"/libraries",
    permission: true})
    
    })

    app.get("/authors",checkpermission_1("author"),function(req,res){

        return res.send({
            route: "/authors",
            permission: true


        })
    })

function checkpermission_1(role){


return function checkpermission(req,res,next){
    if(role === "librarian"){
        return res.send({
            permission:true})
    }else if(role === "author"){
        return res.send({
            permission:true}
                )
    }
    next()
}





}

    function logger(req,res,next){

   if(req.path == "/books"){
     req.role="books"
  } else if(req.path == "/authors"){
    req.role="authors"
  }else if(req.path == "/liberaries"){
      req.role = "liberary"
  }
  console.log("I am middleware")

next()

    }

app.listen(5000,()=>{

    console.log("I am listening on port 5000")
})