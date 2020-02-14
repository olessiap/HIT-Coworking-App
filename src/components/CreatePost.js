import React from 'react'


function CreatePost({ user, handleAddPost }) {
  const [ content, setContent ] = React.useState("")
  const [ image, setImage ] = React.useState(null)
  const imageInputRef = React.useRef("")

  function handleSubmit(event) {
    event.preventDefault()
    const post = { content, image, user }
    // const newPosts = [post, ...posts]
    // setPosts(newPosts)
    handleAddPost(post)
    setContent("")
    imageInputRef.current.value = ""
  }
  return(
    <>
      <h1>Create a Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="enter content here"
          onChange={event => setContent(event.target.value)}
          value={content}
        />
        <input 
          type="file"
          onChange={event => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </>
  )
}

export default CreatePost