import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// import { session } from '../api/api'

import LogIn from './Log_in'
import Home from './Home'
import LandingPage from './LandingPage'
import LogOut from './LogOut'
import NewPost from './NewPost'
import { LogInCheck } from '../api/api'
import Register from './Register'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logedIn: 0
    }
    this.loggedIn = this.loggedIn.bind(this)
  }

  componentDidMount () {
    LogInCheck()
      .then((res) => {
        this.setState({
          logedIn: res
        })
        console.log(this.state.logedIn)
      })
  }

  loggedIn () {
    return this.setState({
      logedIn: true
    })
  }

  loggedOut = () => {
    this.setState({
      logedIn: false
    })
  }

  render () {
    return (
      <>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/LogIn'>
          {!this.state.logedIn ? <LogIn loggedIn={this.loggedIn} /> : <Redirect to='/home' /> }
        </Route>
        <Route exact path='/register'>
          {!this.state.logedIn ? <Register /> : <Redirect to='/home' /> }
        </Route>
        <Route exact path='/home'>
          {this.state.logedIn ? <Home /> : <Redirect to='/' /> }
        </Route>
       <Route exact path='/LogOut'>
         {this.state.logedIn ? <LogOut loggedOut={this.loggedOut} /> : <Redirect to='/' /> }
       </Route>
       <Route exact path='/NewPost'>
         {this.state.logedIn ? <NewPost /> : <Redirect to='/' /> }
       </Route>
      </>
    )
  }
}

export default App
