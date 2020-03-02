import React, { useState, useRef } from 'react'

const CreatePost = ({user, handleAddPost }) => {
  const [ content, setContent ] = useState("")
  const [ image, setImage ] = useState(null)
  
  const imageInputRef = React.useRef("")

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const post = { content, image, user }
    handleAddPost(post)
    setContent("")
    setImage(
      imageInputRef.current.value=""
    )
  }
  return(
    <>
    <h1>Create a Post</h1>
      <form onSubmit={hanldeSubmit}>
        <input 
          type="text" 
          placeholder="add content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <input 
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </>
  )
}
export default CreatePost