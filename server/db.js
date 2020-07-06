const NodeCouchDb = require('node-couchdb')

const dbName = 'journal_users'
const viewUrl = '_design/journal_users/_view/users'
const dbId = '_design/journal_users'

// dbcouch stuff
const couch = new NodeCouchDb({
  auth: {
    user: 'admin',
    pass: 'spoon'
  }
})

function FindUser (username) {
  return couch.get(dbName, viewUrl)
    .then(({ data, headers, status }) => {
      return data.rows.filter(user => user.username === username)
    })
}

function addUser (username, password) {
  const data = { username, password }
  const sample = { username, password }
  return couch.insert(dbName, {
    _id: dbId,
    field: [sample, data, true]
  }).then(({ data, headers, status }) => {
    console.log(data)
    // data is json response
    // headers is an object with all response headers
    // status is statusCode number
  }, err => {
    console.log(err)
    // either request error occured
    // ...or err.code=EDOCCONFLICT if document with the same id already exists
  })
}

function logIn (thisPassword, thisUsername) {
  return couch.get(dbName, viewUrl)
    .then(({ data, headers, status }) => {
      console.log(data.rows[1].value)
      // var isUsername = false
      // var isPassword = false
      // var sendData = {}
      // data.rows.map(item => {
      //   const { password, username } = item.value
      //   if (thisUsername === username) {
      //     isUsername = true
      //   }
      //   if (thisPassword === password) {
      //     isPassword = true
      //   }
      //   if (isUsername && isPassword) {
      //     sendData.id = item.id
      //     sendData.rev = item.value.rev
      //   }
      // })
      // if (isUsername && isPassword) {
      //   sendData.logIn = true
      //   return sendData
      // } else {
      //   sendData.logIn = false
      //   return sendData
      // }
    }, err => {
      return new Error('Database Error', err.message)
    })
}

module.exports = {
  logIn,
  FindUser,
  addUser
}
