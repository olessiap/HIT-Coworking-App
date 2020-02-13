import React from 'react'
import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import Login from "./components/Login"
import Post from "./components/Post"
import PostList from "./components/PostList"

function App() {
  const [ user, setUser ] = React.useState("")
  
  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <div>
      <CreatePost /> 
    </div>
  )
}

export default App