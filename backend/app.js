require('dotenv').config();
const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use('/mail', require('./routes/mail'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`)
})
