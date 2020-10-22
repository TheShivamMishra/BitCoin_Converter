//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();   //new instantce of express;

app.use(bodyParser.urlencoded({extended:true}));  //body parser is used to parse the body of json;

app.listen(3000,function(){      //seting up the server to listen on port 3000;
    console.log("The Serve is Running at port 3000");
});