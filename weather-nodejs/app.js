const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    
const city = req.body.cityName;
const key = "e0244a771dc79c6285aa4cc301d6ba17#";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units=metric";
https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
        const wData = JSON.parse(data);
        const temp = wData.main.temp;
        const desc = wData.weather[0].description;
        const icon =  wData.weather[0].icon;
        const imgurl = " http://openweathermap.org/img/wn/"+icon+"@2x.png ";
        console.log(temp);
        res.write("<h1> temp is  "+temp + "</h1>");
        res.write("<p> description is  "+desc+ "</p>");
        res.write("<img src="+imgurl+">");

        res.send();
    })
})

})



app.listen(3000,function(){
    console.log("server is runing");
})