import React from 'react'

function Post({ content, image, user}) {
  return(
    <>
      {image && (
        <img 
          src={URL.createObjectURL(image)}
          style={{ height:300, width:200, objectFit:"cover"}}
        />
      )}
      <p>{content}</p>
      <p>{user}</p>
    </>
  )
}

export default Post