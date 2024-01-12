require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.get('/twitter',(req, res)=>{
    res.send("techlearn023");

})

app.get('/login',(req, res)=>{
    res.send('<h1>This is the login page for first project</h1>');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})