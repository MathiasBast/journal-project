import React from 'react'
import { Route } from 'react-router-dom'

import LogIn from './Log_in'
import Home from './Home'
import LandingPage from './LandingPage'


const App = () => {
  return (
    <>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/LogIn' component={LogIn} />
    </>
  )
}

export default App
