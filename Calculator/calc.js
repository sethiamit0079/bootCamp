const express = require("express");
const res = require("express/lib/response");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1+num1;

res.send("thanks you  "+result);

})


app.listen(3000,function(){
    console.log("server hosted 3000");
})