import React from 'react'
import {Link} from 'react-router-dom'

const Navagation = () => (
  <nav>
    <ul>
      <li className='nav-item'><Link to='/'>Home</Link></li>
      <li className='nav-item'>Item 2</li>
      <li className='nav-item'>Item 3</li>
      <li className='nav-item'><Link to='/about'>About</Link></li>
    </ul>
  </nav>
)

export default Navagation
