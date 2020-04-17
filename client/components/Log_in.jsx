import React from 'react'

import { logIn } from '../api/api'

class LogIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      data: 'a',
      load: false
    }
  }
  componentDidMount () {
    logIn()
    .then(res => {
      this.setState({
        data: res,
        load: true
      })
      console.log(this.state.data)
    })
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

  handleSubmit = event => {
    const { username, password } = this.state
    const viewData = {
      username,
      password
    }
    console.log(viewData)
    event.preventDefault()
  }

  data = logIn
  render() {
    return (
      <>
        <form>
          <div>
            <label>Username</label>
            <input name='username' tpye='text' value={this.state.username} onChange={this.handleUsernameChange} />
            <br></br>
            <label>Password</label>
            <input name='password' type='text' value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button className='button' type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </>
    )
  }
}

export default LogIn

// {this.state.load 
//   ?<div>
//     <h1>Log in page</h1>
//     <p>{this.state.data.rows[0].value.first_name}</p>
//   </div>
//   : <p>Loading...</p>}