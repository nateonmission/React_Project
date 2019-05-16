import React from 'react'
import logo from './logo.svg'


const About = (props) => (
  <div className='content'>
    <h1>{props.title}</h1>
    <img src={logo} className='App-logo' alt='logo' />

    <p>
      about
    </p>
    <a
      className='App-link'
      href='https://reactjs.org'
      target='_blank'
      rel='noopener noreferrer'
    >
      ABOUT
    </a>
  </div>
)

export default About
