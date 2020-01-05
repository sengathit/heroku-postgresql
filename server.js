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

    client
        .query('SELECT NOW() as now')
        .then(response => res.send(response.rows[0]))
        .catch(e => console.error(e.stack))
})

app.get('/users',(req,res) => {
    // res.sendFile('index.html')
    client.connect()

    client
        .query('SELECT NOW() as now')
        .then(response => res.send(response.rows[0]))
        .catch(e => console.error(e.stack))
})

app.listen(port,() => console.log('Server on port ' + port))