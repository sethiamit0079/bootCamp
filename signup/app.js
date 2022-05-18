const express = require("express");
const bodyparser = require("body-parser");
const { Http2ServerRequest } = require("http2");
const https = require("https");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("public")); //for images, css static in our laptop

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    const first = req.body.fname;
    const last = req.body.lname;
    const mail = req.body.email;

    var data = {
        members: [
            {
                email_address: mail,
                status: "subscribed",
                merge_fields: {
                    FNAME: first,
                    LNAME: last
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/1b37c8e53f";

const options={
    method: "POST",
    auth: "amit:13ca495e03872cd24c5883baa7a7a68e-us8"

}

 const request=    https.request(url,options,function(response){

        if(response.statusCode === 200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }


            response.on("data",function(data){
                console.log(JSON.parse(data));
            })
    })

request.write(jsonData);

request.end();

});


app.listen(process.env.PORT || 3000,function(req,res){
    console.log("server started");
})


app.post("/failure",function(req,res){
res.redirect("/");
})


app.post("/success",function(req,res){
    res.redirect("/");
    })
    

// <form action="/failure" method="post">
//     <div class="mb-3">
//     <button type="submit" class="btn btn-light">Try Again</button>
//   </form>

//API KEY  process.env.PORT ||
//  13ca495e03872cd24c5883baa7a7a68e-us8


//uniqueid
//1b37c8e53f