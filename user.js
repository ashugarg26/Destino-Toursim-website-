const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
var multer = require('multer');
var fs = require('fs');
const path = require('path');
var nodemailer = require("nodemailer");

var app = express();
app.use(cors());

const client = new MongoClient("mongodb://localhost:27017/destino",{ useNewUrlParser: true });
let database;

client.connect((err,db)=>{
    if(!err)
    {
        database=db;
    }
    else
    {
        console.log(err);
    }
})




var mailer = nodemailer.createTransport({
    service:"gmail",
    auth:{
        // user:"manishprajapat9797@gmail.com",
        user: "gargashutosh26@gmail.com",
        // pass:"fbpehfykeohssdse",
        // pass: "9214496309"
        pass: "epmteywlcrxzjwtn"
    }
})




// To access path of image from server
app.use(express.static(path.join(__dirname,'upload')));
app.use(express.static(path.join(__dirname,'tourism')));



// Signup
app.post('/signup',bodyParser.json(),(req, res)=>{
    const collection = database.db('destino').collection("signup");

    collection.findOne({ $or: [{'email': req.body.email}, {'contact': req.body.contact}]}, (err,docs)=>{
            if(!err && docs)
            {
                res.send({msg: "Email or Contact details already exist", status: "Failed", description: docs});
            }
            else
            {
                console.log("in api");
                collection.insertOne(req.body, (err, r)=>{
                if(!err){
                    res.send({msg: "Successfull Inserted", status: "OK", description: "All OK"});
                    var options = {
                        to: req.body.email,
                        from:"gargashutosh26@gmail.com",
                        subject:"Test mail",
                        html:"<div style='color:blue'>Hello " + req.body.username + ",<br> Thanks for subscribing with us.<br><br>You can login to your account by using below credentials.<br>Email: " + req.body.email + "<br>Password: " + req.body.password + "</div>",
                    }
                
                    mailer.sendMail(options,(err)=>{
                        if(err){
                            console.log("mail not sent see error below"+err);
                        }
                        else{
                            console.log("Mail sent successfully");
                        }
                    })
                
                }
                else{
                    res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
                }
                });
            }
    });
});

    


// Login
app.post('/login', bodyParser.json(), (req, res)=>{
    const collection = database.db("destino").collection("signup");

    var name;

    collection.findOne({ 'email': req.body.email, 'password': req.body.password}, (err, docs)=>{
                        if(!err  && docs != null)
                            {                                
                                res.send(docs);
                            }
                        else
                        {
                            res.send({msg: "Username is wrong", status: "Fail", description: docs});
                        }
            var options = {
                to: req.body.email,
                from:"gargashutosh26@gmail.com",
                subject:"Test mail",
                html:"<div style='color:blue'>Hello " + docs.username + ",<br> Welcome to Destino</div>",
            }
        
            mailer.sendMail(options,(err)=>{
                if(err){
                    console.log("mail not sent see error below"+err);
                }
                else{
                    console.log("Mail sent successfully");
                }
            })
    });
    
})


// Forget Password
app.post('/login/forget', bodyParser.json(), (req, res)=>{
    const collection = database.db("destino").collection("signup");

    collection.findOne({'email': req.body.email}, (err, docs)=>{
                if(!err && docs != null)
                    collection.updateOne({'email': req.body.email},{$set:{'password': req.body.password}}, (ob1, ob2)=>{
                        res.send({msg: "Successfully Updated", status: "OK"});
                    });
                else
                    res.send({msg: "Username does not exist", status: "Fail"});
    });
})



// Forget Email
app.post('/login/forget/email', bodyParser.json(), (req, res)=>{
    const collection = database.db("destino").collection("signup");

    collection.findOne({'email': req.body.email}, (err, docs)=>{
                if(!err && docs != null)
                {
                    res.send({msg: "Successfully Updated", status: "OK"});
                }
                else
                    res.send({msg: "Username does not exist", status: "Fail"});
    });
})

// Verify Code
app.post('/login/verification',bodyParser.json(), (req,res)=>{
    var options = {
        to: req.body.verify_email,
        from:"gargashutosh26@gmail.com",
        subject:"Verification Code",
        html:"<div style='color:blue'>Your verification code is " + req.body.code + "</div>",
    }

    mailer.sendMail(options,(err)=>{
        if(err){
            console.log("mail not sent see error below"+err);
        }
        else{
            console.log("Mail sent successfully");
        }
    })
})








// Booking
app.post('/hotel/booking', bodyParser.json(), (req, res)=>{

        if(req.body.category == "Hotel")
        {
            const collection = database.db("destino").collection("hotelbooking");

            collection.insertOne(req.body, (err, r)=>{
                if(!err){
                    res.send({msg: "Successfull Inserted", status: "OK", description: "All OK"});
                }
                else{
                    res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
                }
            });
        }

        if(req.body.category == "Package")
        {
            const collection = database.db("destino").collection("packagebooking");

            collection.insertOne(req.body, (err, r)=>{
                if(!err){
                    res.send({msg: "Successfull Inserted", status: "OK", description: "All OK"});
                }
                else{
                    res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
                }
            });
        }


})

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/')
    },
    filename: function(req, file, cb){
        cb(null, "temp.jpg")
    }
})
var upload = multer({storage: storage})



// Hotel Detils form
app.post('/hotel/form_details',bodyParser.json(),(req, res)=>{
    const collection = database.db('destino').collection('hoteldata');
    
        collection.findOne({'Hotel_Name': req.body.Hotel_Name}, (err,docs)=>{
            if(!err && docs)
            {
                res.send({msg: "Hotel details already exist", status: "Failed", description: docs});
            }
            else
            {
                collection.insertOne(req.body, (err, r)=>{
                console.log("result of insert is ID = " +r.insertedId);
                if(!err){
                    res.send({msg: "Successfull Inserted", status: "OK", description: "All OK"});
                }
                else{
                    res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
                }
            });
        }
    });
})

// Hotel Image Form
app.post('/hotel/form_image', upload.single('banner'), (req, res)=>{
    const collection = database.db('destino').collection('hoteldata');
        collection.updateOne({'Hotel_Name': req.body.Hotel_Name},{$inc:{'counter_id': 1 }}, (err,r)=>{
            if(!err)
            {
                collection.findOne({'Hotel_Name': req.body.Hotel_Name }, (err, docs)=>{
                    if(!err && docs!=null)
                     {
                        fs.renameSync('./upload/temp.jpg', './upload/' + docs.Hotel_Name + docs.counter_id + '.jpg'); 
                        res.send({msg:"Image Sucessfully Inserted", status:'OK', description:'file uploaded'});
                     }
                     else
                     {
                        res.send({msg:"Image is not inserted", status:'FAIL', description:err});
                     }
                     });
            }
            else
            {
                res.send({msg:"counter is not updated", status:'FAIL', description:err});
            }
    });
})

// Getting hotel names in option field
app.get('/hotel/form_image', (req, res)=>{

    const collection = database.db('destino').collection('hoteldata');
    collection.find().toArray(function(err, docs)
    {
        res.send(docs);
    });
})


// Hotel Details which is displayeed on slider component
app.post('/hotel/details',bodyParser.json(),(req, res)=>{
    const collection = database.db('destino').collection('hoteldata');

        collection.findOne({'Hotel_Name': req.body.title}, (err,docs)=>{
            if(!err && docs != null)
            {
                res.send(docs);
            }
            // else
            // {
            //     res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
            // }
        });
})


// Package Booking
app.post('/package/form_details', upload.single('banner'), (req, res)=>{
    console.log(req.body);
    const collection = database.db('destino').collection('packagedata');
        collection.insertOne(req.body, (err, docs)=>{
            console.log(req.body);
            if(!err && docs!=null)
                {
                    fs.renameSync('./upload/temp.jpg', './upload/' + req.body.Name + '.jpg'); 
                    res.send({msg:"Data Inserted Sucessfully", status:'OK', description:'file uploaded'});
                }
                else
                {
                    res.send({msg:"Data is not Inserted", status:'FAIL', description:err});
                }
        });
})

//package details
app.get('/package/details', (req,res)=>{
    const collection = database.db('destino').collection('packagedata');
    collection.find().toArray(function(err, docs)
    {
        res.send(docs);
    });
})

app.post('/package/details',bodyParser.json(),(req,res)=>{

    const collection = database.db('destino').collection('packagedata');

        collection.findOne({'Name': req.body.title}, (err,docs)=>{
            if(!err && docs != null)
            {
                res.send(docs);
            }
        });

})


// Contact Us
app.post('/contact-us',bodyParser.json(), (req, res)=>{
    const collection = database.db('destino').collection('contact');

    collection.insertOne(req.body, (err, docs)=>{
        if(!err){
            res.send({msg: "Successfull Inserted", status: "OK", description: "All OK"});
        }
        else{
            res.send({msg: "Not Inserted", status: "Failed", description: "Error in MongoDB"});
        }
    });
})




app.listen(3000,()=>{console.log("Server is Running......!!")});