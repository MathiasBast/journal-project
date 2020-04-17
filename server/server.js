const path = require('path')
const express = require('express')
const NodeCouchDb = require('node-couchdb')
const session = require('express-session')

// routes import
const logIn = require('./routes/logIn')

// session cookie stuff
const THREE_HOURS = 1000 * 60 * 60 * 3
const {
  NODE_ENV = 'development',
  SESS_NAME = 'SessionId',
  SESS_LIFETIME = THREE_HOURS,
  SESS_SECRET = '6jaR$k4S#k8PsEq@'
} = process.env

const IN_PROD = NODE_ENV === ' production'



const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(session({
  name: SESS_NAME,
  saveUninitialized: false,
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: IN_PROD
  }
}))

//routes
server.use('api/v1/posts/journal/logIn', logIn)

module.exports = server
