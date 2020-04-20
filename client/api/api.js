import request from 'superagent'

const url = 'api/v1/posts/journal/'

export function logIn (password, username) {
  return request.get(url + 'logIn/' + password + '/' + username)
  .then(res => {
    if(res.body) {
      return {logIn: res.body}
    } else {
      return {logIn: false}
    }
  })
  .catch(err => {
    return {logIn: false}
  })
}

export function session () {
  return request.get(url + 'sessionCookie')
    .then(res => {
      console.log(res.body)
      return res.body
    })
}