const express = require('express')
const router = express.Router()
const session = require('express-session')

const { logIn } = require('../db')

const NodeCouchDb = require('node-couchdb')

const dbName = 'journal_users'
const viewUrl  = '_design/journal_users/_view/users'

// dbcouch stuff
const couch = new NodeCouchDb({
  auth: {
      user: 'admin',
      pass: 'spoon'
  }
})


router.get('/:password/:username', (req, res) => {
  const { password, username } = params.body
  logIn(password, username)
  .then(apiRes => {
    res.json(apiRes)
  })
})


module.exports = router