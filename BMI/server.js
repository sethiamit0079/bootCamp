const express = require("express");
const app = express();

//call back function 
app.get("/",function(req,res){
    res.send("hello world hii");
})

app.get("/contact",function(req,res){
    res.send("contact me at: sethi@gmail.com")
})

app.get("/about",function(req,res){
    res.send("<b>I am the best </b>")
})

app.listen(3000,function(){
    console.log("server is on 3000");
})