import React, { useState } from 'react'
  //setup component state
  //setup the form
  //onchange set user
  //onsubmit setUser from App with the component user
const Login = ({ setUser }) => {
  const [ userName, setUserName ] = useState("")
  const handleSumbit = (e) => {
    e.preventDefault()
    setUser(userName)
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input type="text" placeholder="username" onChange={(e) => setUserName(e.target.value)}/>
        <input type="submit" value="login"/>
      </form>
    </>
  )
}

export default Login