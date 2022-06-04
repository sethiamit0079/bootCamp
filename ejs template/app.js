const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/",function(req,res){
   
    var today = new Date();
    var currDay = today.getDate();
    var day ="";

    if(currDay === 6 || currDay === 0){
        day = "weekend";
        

       // res.send("<h1>Yes Weekend</h1>");
    }else{
        day = "weekend";

        // res.write("<h1> Noo weekend</h1>");
        // res.write("<p> Do your work</p>");
        // res.send();

       // res.sendFile(__dirname + "/index.html");
    }

    //res.render("list",{kindOfDay: day});

    res.render("list",{kindOfDay: currDay});

});

app.listen(3000,function(){
    console.log("server running");
});