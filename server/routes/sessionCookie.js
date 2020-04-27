const express = require('express')
const router = express.Router()

router.get(('/'), (req, res) => {
  data={
    userID: req.session.userID,
    userRev: req.session.userRev
  }
  res.json(data)
})

router.get('/access', (req,res) => {
  data={
    userID: req.session.userID,
    userRev: req.session.userRev
  }
  if(!data.userID || !data.userRev) {
    return false
  } else {
    return true
  }
})

module.exports = router