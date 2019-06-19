import React from 'react'
import { NavLink } from 'react-router-dom'

const Navagation = () => (
  <nav>
    <ul>
      <NavLink exact to='/' className='nav-item lcars-element left-rounded lcars-neon-carrot-bg'><li>Home</li></NavLink>
      <NavLink to='/shows' className='nav-item lcars-element button lcars-neon-carrot-bg'><li>Shows</li></NavLink>
      <NavLink to='/movies' className='nav-item lcars-element button lcars-neon-carrot-bg'><li>Movies</li></NavLink>
      <NavLink to='/about' className='nav-item lcars-element right-rounded lcars-neon-carrot-bg'><li>About</li></NavLink>
    </ul>

  </nav>
)

export default Navagation
