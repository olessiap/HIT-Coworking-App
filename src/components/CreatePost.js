import React from 'react'
import PostList from "./PostList"


function CreatePost({ user, posts, setPosts }) {
  const [ content, setContent ] = React.useState("")
  const [ image, setImage ] = React.useState(null)


  function handleSubmit(event) {
    event.preventDefault()
    const post = { content, image, user }
    const newPosts = [post, ...posts]
    setPosts(newPosts)
  }
  return(
    <>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="enter content here"
          onChange={event => setContent(event.target.value)}
        />
        <input 
          type="file"
          onChange={event => setImage(event.target.files[0])}
        />
        <button type="submit">Submit Post</button>
      </form>
    </>
  )
}

export default CreatePost