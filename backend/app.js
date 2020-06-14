require('dotenv').config();
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
} 

app.use(bodyParser.json());
app.use('/mail', cors(corsOptions),require('./routes/mail'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`)
})
