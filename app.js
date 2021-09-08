const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

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
        let count = results[0].count
        res.render('index', {count})
      })
})

app.post('/sign-up', (req, res) => {
    const { email } = req.body
    const insertOneQuery = `INSERT INTO users SET ?`

    connection.query( insertOneQuery, {email}, (error, results) => {
        if(error) throw error
        console.log(results)
    })
    res.redirect('/')
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