const express = require('express')
const app = express()

require("dotenv/config");

const HOST = process.env.MYSQL_HOST
const PASSWORD = process.env.MYSQL_PASSWORD
const USER = process.env.MYSQL_USER

const mysql = require('mysql')

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: 'users_emails'
})

app.get('/', (req, res) => {
    const totalUsers = `SELECT COUNT(*) AS count FROM users`
    let result = connection.query( totalUsers, (error, results) => {
        if(error) throw error
        console.log('Total users: ',results[0].count)
        res.status(200).send('Total users: ' + results[0].count)
      })
    // console.log(result)
})

app.get('/code', (req, res) => {
    res.send('&^^$#$$^&*^^&*#')
})

app.get('/num', (req, res) => {
    const num = Math.floor(Math.random() * 6) + 1
    console.log(num)
    res.send( 'Your lucky number is ' + num )
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})