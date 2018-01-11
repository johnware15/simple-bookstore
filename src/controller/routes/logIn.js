import logIn from '../model/db/db/login.js'
import express from 'express'

const app = express()

const logIn = app.post('/log-in', (req, res) => {
  if(!req.query.email || !req.query.password) {
    res.render('Please log in to your account!')
  } else if(req.body.email !== req.query.email || req.body.password !== req.query.password) {
    res.render('Invalid credentials. Please try again.')
  } else if(req.session.email === req.query.email && req.session.password === req.query.password) {
    res.render('/')
  }
})
