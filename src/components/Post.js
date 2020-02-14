import React from 'react'

function Post({ post }) {
  return(
    <>
      {post.image && (
        <img 
          src={URL.createObjectURL(post.image)}
          style={{ height:300, width:200, objectFit:"cover"}}
        />
      )}
      <p>{post.content}</p>
      <p>{post.user}</p>
    </>
  )
}

export default Post