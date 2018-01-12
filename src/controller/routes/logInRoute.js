import logIn from '../../model/db/db/logIn.js'
import express from 'express'

const app = express()

const logInRoute = app.post('/log-in', (req, res) => {
  const user = req.body
  logIn(user.email, user.password)
    .then((user) => {
      if(user !== null) {
        res.render('/')
      } else {
        console.log('Incorrect info. Try again, bih!');
        res.render('/log-in')
      }
  })
  .catch(error)
})

module.exports = logInRoute
