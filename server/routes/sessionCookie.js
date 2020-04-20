const express = require('express')
const router = express.Router()

router.get(('/'), (req, res) => {
  data={
    userID: req.session.userID,
    userRev: req.session.userRev
  }
  res.json(data)
})

module.exports = router