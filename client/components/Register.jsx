import React from 'react'

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    conPassword: '',
    matching: false
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
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
  handleConPasswordChange = event => {
    this.setState({
      conPassword: event.target.value
    })
  }
  handleSubmitButton = event => {
    event.preventDefault()
    const { conPassword, password } = this.state
    if (conPassword !== password) {
      this.setState({
        matching: true
      })
    } else {
      this.setState({
        matching: false
      })
    }
    console.log(this.state)
  }

  render () {
    return (
      <div className='marginClass register' >
        <form >
          <label>First Name</label>
          <input autoComplete="off" className='register-input' type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} />
          <br />

          <label>Last Name</label>
          <input autoComplete="off" className='register-input' type='text' value={this.state.lastName} onChange={this.handleLastNameChange} />
          <br />

          <label>Email</label>
          <input autoComplete="off" className='register-input' type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <br />

          <label>Username</label>
          <input autoComplete="off" className='register-input' type='text' value={this.state.username} onChange={this.handleUsernameChange} />
          <br />

          <label>Password</label>
          <input autoComplete="off" className='register-input' type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />

          {this.state.matching && <p>Passwords do not match</p>}

          <label>Confirmation Password</label>
          <input autoComplete="off" className='register-input' type='password' value={this.state.conPassword} onChange={this.handleConPasswordChange} />

          <button onClick={this.handleSubmitButton} className='register-button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Register
