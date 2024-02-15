console.log("Backend Development")
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

require('dotenv').config()


app.get('/twitter', (req, res) => {
    res.send('priyanka kumari')
  })

app.get('/login', (req,res) => {
  res.send('<h1>Please login to my channel</h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>Backend Development</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})