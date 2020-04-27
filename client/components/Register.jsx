import React from 'react'

class Register extends React.Component {
  render () {
    return (
      <div className='marginClass' >
        <form>
          <label>First Name</label><input type='text' />
          <label>Last Name</label><input type='text' />
          <label>Email</label><input type='text' />
          <label>Username</label><input type='text' />
          <label>Password</label><input type='text' />
          <label>Confirmation Password</label><input type='text' />
        </form>
      </div>
    )
  }
}

export default Register