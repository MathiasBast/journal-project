import React from 'react'
import { Redirect } from 'react-router'

import { logIn } from '../api/api'

class LogIn extends React.Component {
  _isMounted = false
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
      logIn: false,
      runner: this.props.loggedIn,
    }
  }
  componentDidMount () {
    this._isMounted = true

    const { username, password } = this.state
    if (username !== '' && password !== '') {
      logIn(password, username)
        .then(res => {
          if (res.logIn) {
            this.setState({
              logIn: true
            }, () => { this.state.runner() })
          } else {
            this.setState({
              error: 'Username or password missing'
            })
          }
        })
    }
  }

  componentWillUnmount () {
    this._isMounted = false
    var token = storage.getItem('token')
    if (token){
      this.setState({logIn: true})
    }
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return (
      <>

      { this.state.logIn && <Redirect to="/home" />}

      <a className='hyper-link-remove' href='#/'><button className='back-button'type='button'>Back</button></a>
      <div className='marginClass log-in'>
        <div className='log-in-incorrect'>
          <p>{this.state.error}</p>
        </div>
        <form>
          <div>
            <label>Username</label>
            <input className='log-in-input'
              spellCheck="false" name='username' type='text'
              value={this.state.username}
              onChange={this.handleUsernameChange} />

            <br></br>

            <label>Password</label>
            <input className='log-in-input'
              spellCheck="false" name='password' type='password'
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </div>
          <button className='log-in-button' type='button' onClick={() => this.componentDidMount()}>Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default LogIn
