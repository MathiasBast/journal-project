const path = require('path')
const express = require('express')
const NodeCouchDb = require('node-couchdb')

// routes import
const logIn = require('./routes/logIn')
const logOut = require('./routes/logOut')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

//routes
server.use('/api/v1/posts/journal/auth', logIn)
server.use('/api/v1/posts/journal/auth', logOut)

module.exports = server
