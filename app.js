var express = require("express");
var cors = require("cors");

var app = express();

app.get('/',function(req, res)
            {
                res.sendfile("login.html");

})

app.listen(3000,()=>{console.log("Server is Running")});