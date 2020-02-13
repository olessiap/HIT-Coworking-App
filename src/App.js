import React from 'react'
import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import Login from "./components/Login"

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
      {posts.map((post, index) => (
        <React.Fragment key={index}>
        {post.image && (
          <img 
            src={URL.createObjectURL(post.image)}
            style={{ height: 100, width:100, objectFit:"cover"}}
          />
        )}
          <p>{post.content}</p>
          <p>{user}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App