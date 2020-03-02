import React, { useState, useEffect } from 'react'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Login from './components/Login'
import PostList from './components/PostList'

export const UserContext = React.createContext()

const App = () => {
  const [ user, setUser ] = useState("Oli")
  const [ posts, setPosts ] = useState([])
  
  useEffect(() => {
    document.title = user ? `${user}'s feed` : "please sign in"
  })
  
  const handleAddPost = React.useCallback(
    newPost => {
      setPosts([newPost, ...posts])
    }, [posts]
 )
 
  if(!user) {
    return <Login setUser={setUser} />
  }

  return (
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost}/>
      <PostList posts={posts}/>
    </UserContext.Provider>
  )
}
 
export default App
