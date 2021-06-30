
const axios = require('axios')
const https = require('https')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, Authorization");
  next();
});

process.env.PORT = 3000
process.env.BACKEND_HOST = `https://localhost:44398`

const agent = new https.Agent({  
    rejectUnauthorized: false
});
console.log('HANAS ASDDS')
 
require('./controllers/items')(app, agent)
require('./controllers/celebrities')(app, agent)
require('./controllers/users')(app, agent)
require('./controllers/ratings')(app, agent)
require('./controllers/comments')(app, agent)

app.listen(process.env.PORT)
