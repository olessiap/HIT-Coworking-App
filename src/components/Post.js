import React from 'react'
import { UserContext, PostContext } from '../App'

const Post = ({image, content, user, id}) => {
  const currentUser = React.useContext(UserContext)
  const { dispatch } = React.useContext(PostContext)
  const isCurrentUser = currentUser === user
  
  const handleDelete = () => {
    dispatch({ type: "DELETE_POST", payload: {id}} )
  }
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
      <div>
        { isCurrentUser && (
          <button onClick={handleDelete}>delete</button>
        )}       
      </div>
    </>
  )
}

export default Post