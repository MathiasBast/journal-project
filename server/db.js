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

function logIn (thisPassword, thisUsername) {
  return couch.get(dbName, viewUrl)
    .then(({data, headers, status}) => {
      var isUsername = false
      var isPassword = false
      var sendData = {}
      data.rows.map(item => {
        const {password, username} = item.value
        if(thisUsername === username) {
          isUsername = true
        }
        if(thisPassword === password) {
          isPassword = true
        }
        if(isUsername && isPassword){
          sendData.id = item.id
          sendData.rev = item.value.rev
          return
        }
      })
      if(isUsername && isPassword){
        sendData.logIn = true
        return sendData
      } else {
        sendData.logIn = false
        return sendData
      }
      }, err => {
        return new Error("Database Error")
      });
   }

module.exports = {
  logIn
}