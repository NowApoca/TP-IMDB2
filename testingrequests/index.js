
const axios = require('axios')
const https = require('https')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

const envSchema = require('env-schema')

const schema = {
  type: 'object',
  required: [ 'PORT','BACKEND_HOST' ],
  properties: {
    PORT: {
      type: 'number'
    },
    BACKEND_HOST: {
      type: 'string'
    },
  }
}

envSchema({
  schema: schema,
  dotenv: true // load .env if it's there, default: false
})

const agent = new https.Agent({  
    rejectUnauthorized: false
});
console.log('HANAS ASDDS')
 
app.get('/', async function (req, res) {
  console.log('HANAS ASDDS 2')
    const a = await axios.patch('https://localhost:44398/users/password',  {
      "title":"saddasdsaasd",
      "image":"image image",
      "subtitle":"subtitle subtitle",
      "year":1998,
      "summary":"summary summary",
      "director":"director director",
      "productor":"productor productor",
      "writers":"writers writers",
      "stars":"astar fds fdse",
      "productorCountry":"productorCountry productorCountry",
      "language":"language language",
      "releaseDate":"releaseDate releaseDate",
      "duration": 11,
      "genre":"genre genre",
      "budget":"budget budget",
      "earns":"earns earns"
      }, { httpsAgent: agent, headers: {Authorization: 'asddsadasads'} });
    console.log('HANAS ASDDS 3')
    console.log(a)
    res.status(200).json({
        data: a.data
    })
})

require('./controllers/items')(app, agent)
require('./controllers/celebrities')(app, agent)
require('./controllers/users')(app, agent)
require('./controllers/ratings')(app, agent)
require('./controllers/comments')(app, agent)

app.listen(process.env.PORT)
