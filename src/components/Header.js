import React from 'react'

const Header = ({ user, setUser }) => {
  return(
    <>
      <p>hello, {user}!</p>
      <button onClick={() => setUser("")}>logout</button>
    </>
  )
}

export default Header