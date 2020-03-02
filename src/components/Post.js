import React from 'react'
import { UserContext } from '../App'


const Post = ({image, content, user}) => {

  const currentUser = React.useContext(UserContext)
  const isCurrentUser = currentUser === user
  return (
    <>
      {image && (
        <img 
        src={URL.createObjectURL(image)} 
        style={{height:300, width:200, objectFit:'cover'}}
        />
      )}
      <p>{content}</p>
      <p style={{ color: isCurrentUser && 'green'}}>{user}</p>
      { isCurrentUser && (
        <button>delete</button>
      )}       
    </>
  )
}

export default Post