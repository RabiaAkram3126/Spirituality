const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");


const app =express();

//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));


//use ejs as the view engine
app.set('view engine','ejs');
//static file
app.use(express.static("public"));


app.get("/",(req,res)=>{
     res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  //Register User

  app.post(".signup",async (req,res)=>{
    const data ={
        name: req.body.username,
        password: req.body.password
    }
    const userdate = await collection.insertMany(data);
    console.log(userdata);
  })

const port = 5000;
app.listen(port,()=> {
          console.log('Server running on Port:${port}');
})