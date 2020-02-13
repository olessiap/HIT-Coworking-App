import React from 'react'

function Login( {setUser}) {
  const [ userName, setUserName ] = React.useState("")

  function handleSetUserName(event) {
    event.preventDefault()
    setUser(userName)
  }
  return(
    <>
      <h2>Login</h2>
      <form onSubmit={handleSetUserName}>
        <input 
          onChange={(event) => setUserName(event.target.value)}
          placeholder="input username" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login