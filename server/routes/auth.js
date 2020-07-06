if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.SECRET_KEY
const { logIn } = require('../db')

router.post('/register', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.error(err)
      res.send({ err: err.message }).end()
    }
    if (info !== undefined) {
      res.statusMessage = `${info.message}`
      res.status(403).send({ message: info.message }).end()
    } else {
      res.statusMessage = 'user created!'
      res.status(200).end()
    }
  })(req, res, next)
})

module.exports = router
