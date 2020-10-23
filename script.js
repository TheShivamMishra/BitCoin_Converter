//jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();   //new instantce of express;

app.use(bodyParser.urlencoded({extended:true}));  //body parser is used to parse the body of json;

app.get("/",function(req,res){    //when someone try to get the home directory with handling call back;npm
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){   //handling post request to main route;
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
    var finalUrl = url + crypto + fiat;
    request(finalUrl,function(error,response,body){

        var data = JSON.parse(body);   //converting json data into javascript;
        document.querySelector("a").innerHTML = crypto;
        document.querySelector("b").innerHTML = fiat;
        document.querySelector("c").innerHTML = body.last;
        console.log(data.last);
    });

    res.sendFile(__dirname + "/bit.html");
});

app.listen(3000,function(){      //seting up the server to listen on port 3000;
    console.log("The Serve is Running at port 3000");
});