const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app =express();

app.set('view engine','ejs');

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

const port = 3000;
app.listen(port,()=> {
          console.log('Server running on Port:${port}');
})