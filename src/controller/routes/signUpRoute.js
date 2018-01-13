import signUp from '../../model/db/db/signUp.js'
import express from 'express'

const app = express()

const signUpRoute = app.post('/sign-up', (req, res) => {
  const newUser = req.body
  signUp(newUser.email, newUser.password)
    .then((newUser) => {
      if(newUser !== null) {
        res.render('/')
      } else {
        console.log('Can\'t sign you up without all the info.');
        res.render('/sign-up')
      }
  })
  .catch(error)
})

module.exports = signUpRoute
