'use strict'

const express = require("express");

const app = express();
/*
app.get('/', (req, res)=>{
  res.send("ZDAROVA EBAT");
}); */

app.get('/', (req, res)=>{
  res.sendfile("./public/index.html");
});

app.use(express.static('public'));

app.listen(3000, (req, res)=>{
  console.log('working');
});
