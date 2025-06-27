const express = require('express')
const cors = require('cors')
const mongo = require('./mongo')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.json('Hello Mongo')
})

var port  = 3001

server.get('/find', async (req, res) => {
  await mongo.connect();
  await mongo.findItem(res);
});

server.listen(port, () => {
  console.log("Server is running in 3001");  
});