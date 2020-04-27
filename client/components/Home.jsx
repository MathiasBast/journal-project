import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <>
        <div className='marginClass' >
          <a href='#/LogOut'><button className='home-logOut-button' >Log Out</button></a>
          <h1>Welcome To Your Home Page!</h1>
          <a href='#/NewPost' ><button className='home-Add-button'>Add a Post</button></a>
          <div className='post-display' >
            <h2>Post 1</h2>
            <p>Title: What a wonderful world we live in</p>
            <div className='post-display-date'>Date: 21/04/2020</div>
          </div>
          <div className='post-display' >
            <h2>Post 2</h2>
            <p>Title: I sHoUlD MaKe A JOuRnAl</p>
            <div className='post-display-date'>Date: 22/04/2020</div>
          </div>
        </div>
      </>
    )
  }
}

export default Home