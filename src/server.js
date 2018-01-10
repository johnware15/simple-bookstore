import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import pgp from 'pg-promise'
import methodOverride from 'method-override'

const app = express()
const routes = require('./controller/routes');
const db = require('./model/db');
const port = process.env.PORT || 3000

app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.use(express.static('public'))

app.use(methodOverride('method'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

module.exports = app
