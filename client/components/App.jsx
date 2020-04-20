import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// import { session } from '../api/api'

import LogIn from './Log_in'
import Home from './Home'
import LandingPage from './LandingPage'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logedIn: false
    }
    this.loggedIn = this.loggedIn.bind(this)
  }

  loggedIn () {
    console.log('working')
    this.setState({
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
        <Route exact path='/LogIn' component={LogIn} loggedIn={this.loggedIn}/>
        <Route exact path='/home'> 
         {this.state.logedIn ? <Home /> : <Redirect to='/' /> }
       </Route>
      </>
    )
  }
}

// logedIn () {
//   console.log('func')
// session()
//   .then(data => {
//     console.log(Object.keys(data).length !== 0)
//     console.log('data:', data)
//     if(Object.keys(data).length === 0){
//       return false
//     } 
//     return true
//   })
// }


export default App
