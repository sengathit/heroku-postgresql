const express = require('express')
const path = require('path')

const app = express()

const port = process.env.port || 3001

app.use(express.static(__dirname,'public'))

app.get('',(req,res) => {
    res.sendFile('index.html')
})