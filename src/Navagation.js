import React from 'react'
import { Link } from 'react-router-dom'

const Navagation = () => (
  <nav>
    <ul>
      <li className='nav-item lcars-element left-rounded lcars-neon-carrot-bg'><Link to='/'>Home</Link></li>
      <li className='nav-item lcars-element button lcars-neon-carrot-bg'><Link to='/shows'>Shows</Link></li>
      <li className='nav-item lcars-element button lcars-neon-carrot-bg'><Link to='/movies'>Movies</Link></li>
      <li className='nav-item lcars-element button lcars-neon-carrot-bg'><Link to='/books'>Books</Link></li>
      <li className='nav-item lcars-element right-rounded lcars-neon-carrot-bg'><Link to='/about'>About</Link></li>
    </ul>

  </nav>
)

export default Navagation
