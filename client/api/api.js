import request from 'superagent'

const url = 'api/v1/posts/journal/'

export function logIn (password, username) {
  return request.get(url + 'logIn/' + password + '/' + username)
    .then(res => {
      if (res.body) {
        localStorage.setItem('token', res.body.token)
        return { logIn: res.body }
      } else {
        return { logIn: false }
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err.message)
      return { logIn: false }
    })
}

export function session () {
  return request.get(url + 'sessionCookie')
    .then(res => {
      console.log('session api', res.body)
      return res.body
    })
}

export function logOut () {
  return request.get(url + 'logOut/')
    .then(res => {
      console.log(res)
    })
}

export function LogInCheck () {
  return request.get(url + 'sessionCookie/access')
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
