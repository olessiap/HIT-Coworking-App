import React from 'react'
import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import Login from "./components/Login"

function App() {
  const [ user, setUser ] = React.useState("oli")
  
  React.useEffect(() => {
    document.title =  user ? `${user}'s feed` : "please log in"
  }, [user])

  if(!user) {
    return <Login setUser={setUser}/>
  }

  return (
    <div>
      <Header user={user} setUser={setUser}/>
    </div>
  )
}

export default App