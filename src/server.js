'use strict'
import path from 'path'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import pgp from 'pg-promise'
import methodOverride from 'method-override'

import logInRoute from '../src/controller/routes/logInRoute.js'
import signUpRoute from '../src/controller/routes/signUpRoute.js'
import logIn from '../src/model/db/db/logIn.js'
import signUp from '../src/model/db/db/signUp.js'

const app = express()
// const routes = require('./src/controller/routes');
// const db = require('./model/db');
const port = process.env.PORT || 3000

const ROOT_DIR = path.resolve(__dirname, '../')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.use(express.static('public'))

app.use(methodOverride('method'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(`${ROOT_DIR}/public`))

app.use(signUpRoute)

app.use(logInRoute)

app.use(signUp)

app.use(logIn)

app.get('/', (req, res) => {
  res.render('index')
})

module.exports = app
