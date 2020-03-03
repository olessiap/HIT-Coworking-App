import React, { useState, useEffect } from 'react'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Login from './components/Login'
import PostList from './components/PostList'
import postReducer from './reducer'

export const UserContext = React.createContext()
export const PostContext = React.createContext({
  posts:[]
})


const App = () => {
  const [ user, setUser ] = useState("Oli")
  // const [ posts, setPosts ] = useState([])
  const initialPostState = React.useContext(PostContext)
  const [ state, dispatch ] = React.useReducer(postReducer, initialPostState)
  
  useEffect(() => {
    document.title = user ? `${user}'s feed` : "please sign in"
  })
  

  if(!user) {
    return <Login setUser={setUser} />
  }

  return (
    <PostContext.Provider value={{state, dispatch}}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user}/>
        <PostList posts={state.posts}/>
      </UserContext.Provider>
    </PostContext.Provider>
  )
}
 
export default App
