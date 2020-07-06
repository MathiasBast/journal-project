const express = require('express')
const router = express.Router()

const { logIn } = require('../db')

router.get('/:password/:username', (req, res) => {
  const { password, username } = req.params
  logIn(password, username)
    .then(dbRes => {
      if (dbRes.logIn) {
        req.session.userID = dbRes.id
        req.session.userRev = dbRes.rev
      }
      res.send(dbRes.logIn)
    })
    .catch(err => {
      console.log('Routes error:', err)
    })
})

module.exports = router
