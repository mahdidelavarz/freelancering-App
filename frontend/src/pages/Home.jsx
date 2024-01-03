import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='dark:bg-gray-900'>
      <div>Home</div>
    <NavLink to={'/owner'}> go to owner</NavLink>
    </div>
  )
}

export default Home