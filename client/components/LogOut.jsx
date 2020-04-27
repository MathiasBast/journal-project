import React from 'react'
import { logOut } from '../api/api'
function logOutHandler () {
  logOut()
}
const LogOut = props => {
  return (
    <div className='marginClass log-in'>
      <h1>Are You Sure?</h1>
      <a href='/' ><button onClick={() => {logOutHandler(); props.loggedOut()}} className='log-out-button' >Yes</button></a>
      <a href='#/home'><button className='log-out-button' >No</button></a>
    </div>
  )
}

export default LogOut