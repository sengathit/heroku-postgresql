const express = require('express')
const path = require('path')
const { Client } = require('pg')
const client = new Client({
    user: 'ialtdmmciozptu',
    host: 'ec2-174-129-33-147.compute-1.amazonaws.com',
    database: 'd5qcglgvrs2st6',
    password: 'f049fa6d238d08251c3d39a4439e2a245bc92e2cb3902020678215d282aa7c2a',
    port: 5432
})

const app = express()

const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname,'public')))

app.get('',(req,res) => {
    res.sendFile('index.html')
})

app.get('/users',(req,res) => {
    // res.sendFile('index.html')
    client.connect()

    client.query('SELECT * FROM users', (err, response) => {
        res.send(response.rows[0])
        client.end()
    })
})

app.listen(port,() => console.log('Server on port ' + port))