import React from 'react'

function Header({user, setUser}) {
  return (
    <>
      <p>welcome, {user}!</p>
      <button onClick={() => setUser("")}>logout</button>
    </>
  )
}

export default Header