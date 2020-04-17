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

function logIn (password, username, callback) {
  return couch.get(dbName, viewUrl)
  .then(({data, headers, status}) => {
      return data
    }, err => {
      console.log(err)
    });

  }

module.exports = {
  logIn
}