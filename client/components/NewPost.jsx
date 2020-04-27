import React from 'react'

class NewPost extends React.Component {
  render () {
    return(
      <div className='marginClass'>
        <h1>Add A New Post</h1>
        <a href='#/home'><button className='back-button' >Back</button></a>
        <form>
          <input className='post-title-input' />
          <textarea className='post-textarea' ></textarea>
          <button className='post-add-button' >Add Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost