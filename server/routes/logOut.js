const express = require('express')
const router = express.Router()

router.get(('/'), (req, res) => {
  try{
    req.session.userID = 0
    req.session.userRev = 0
    res.sendStatus(200)
  } catch {
    res.sendStatus(403)
  }
})

module.exports = router