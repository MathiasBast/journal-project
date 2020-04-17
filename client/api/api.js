import request from 'superagent'

const url = 'api/v1/posts/journal'

export function logIn (password, username) {
  return request.get(url + '/'+ password + '/' + username)
  .then(res => {
    console.log('hi')
    return res.body
  })
}