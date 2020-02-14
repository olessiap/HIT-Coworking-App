import React from 'react'
import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import Login from "./components/Login"
import PostList from "./components/PostList"

function App() {
  const [ user, setUser ] = React.useState("oli")
  const [ posts, setPosts ] = React.useState([])
  
  React.useEffect(() => {
    document.title =  user ? `${user}'s feed` : "please log in"
  }, [user])

  if(!user) {
    return <Login setUser={setUser}/>
  }
  console.log(posts)
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <CreatePost user={user} posts={posts} setPosts={setPosts}/>
      <PostList posts={posts}/>
    </div>
  )
}

export default App