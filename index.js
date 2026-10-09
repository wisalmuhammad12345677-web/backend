const express = require('express');
const dotenv = require("dotenv");


dotenv.config()
const app = express()
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('hellow word!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 app.get('/login', (req, res)=>{
  res.send("wisal khan")
 })