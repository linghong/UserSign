const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const router=require('./router');
const mongoose =require('mongoose');
const app=express();//passing response and routing

//Set up DB userAccount is the database name it will create
mongoose.connect('mongodb://localhost:auth/userAccount');

//set up App
//morgan and bodyParser are middleware
//morgan for logging and debug, and bodyParser parse some incoming request to json, 
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

//set up server
const port=process.env.PORT||7777;
const server=http.createServer(app)
server.listen(port);
console.log('Server listening on:', port);