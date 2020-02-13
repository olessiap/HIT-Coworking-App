import React from 'react'

function CreatePost({ user }) {
  const [ content, setContent ] = React.useState("")
  const [ image, setImage ] = React.useState(null)
  
  return(
    <>
      <h1>Create a Post</h1>
      <form>
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
      <p>{content}</p>
      {image && 
        <>
        <img 
          src={URL.createObjectURL(image)}
          style={{ height:300, width:200, objectFit:'cover' }}
        />
        <p>{user}</p>
        </>
        }
      
    </>
  )
}

export default CreatePost