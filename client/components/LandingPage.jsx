import React from 'react'

class LandingPage extends React.Component {
  render () {
    return (
      <>
        <div className='marginClass' >
        <a href='#/register'><button className='landing-button' >Register</button></a>
        <a href='#/logIn'><button className='landing-button' >Log In</button></a>
          <h1>Welcome To Your Journal!</h1>
          
          <img className='landing-img' src='/images/journal-open-book.jpg' />
          <p className='landing-hover'>Write whatever you want!</p>
          
          <h2>What Can You Use It For?</h2>
          <p>
            Like a normal journal you can write your thoughts, but the difference is this is password protected. If you ask me that is better than 
            hiding your diary behind your bed and hoping no-one goes through it and finds your inner workings if you do not wish to.
          </p>

          <img className='landing-img' style={{height:'300px', width:'auto'}} src='/images/journal-picture.jpg' alt='Prompt to write' />

          <p>
            This can be your place on the internet if you do choose to take it, consider this an invitation you may take up if you wish to. 
            You can enjoy your privacy with this site and relax knowing your logs will be safe with us. You can sign up and create your account 
            which you can log back into on your return to access your data.
          </p>

          <img src='/images/journal-how-are-you.jpg' className='landing-img'/>
        </div>
        <footer className='landing-footer'>
          <p>Made with React</p>
          <p className='text-right' >By Mathias Bast</p>
        </footer>
      </>
    )
  }
}

export default LandingPage