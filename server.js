const express = require('express')
const path = require('path')
const { Client } = require('pg')
const client = new Client()

const app = express()

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
    res.send('NOPE')
})

app.get('/users',(req,res) => {
    res.send('YOLO')
})

app.listen(port,() => console.log('Server on port ' + port))