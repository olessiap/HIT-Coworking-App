import React from 'react'
import Post from './Post'

const PostList = ( {posts}) => {
  return posts.map((post, index) => (<Post key={post.id} {...post}/>))
}

export default PostList