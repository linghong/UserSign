const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan =require('morgan');
const app=express();
const router=require('./router');

//set up App
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

//set up server
const port=process.env.PORT||7777;
const server=http.createServer(app)
server.listen(port);
console.log('Server listening on:', port);