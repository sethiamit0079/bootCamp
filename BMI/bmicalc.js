const express = require("express");
const bodyParse = require("body-parser");
const app = express();
app.use(bodyParse.urlencoded({extended:true}));


app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/index2.html");
})
app.post("/bmi",function(req,res){
    var w = Number(req.body.weight);
    var h = Number(req.body.height);
    var bmi = (w*703)/(h*h);
    res.send("your BMI is  "+ bmi);

})



app.listen(3000,function(){
    console.log("server is started at 3000");
})