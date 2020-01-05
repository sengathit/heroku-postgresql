const express = require('express')
const path = require('path')
const { Client } = require('pg')
const client = new Client()

const app = express()

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname,'public')))

app.get('',(req,res) => {
    // res.sendFile('index.html')
    client.connect()

    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
        console.log(err ? err.stack : res.rows[0].message) // Hello World!
        client.end()
    })
})

app.listen(port,() => console.log('Server on port ' + port))