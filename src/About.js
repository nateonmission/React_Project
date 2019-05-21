import React from 'react'
import logo from './logo.svg'

const About = (props) => (
  <div className='content'>
    <h1>{props.title}</h1>
    <img src={logo} className='App-logo' alt='logo' />

    <p>
      Welcome to [Project Name]! I designed this app as a project for CodeLouisville. Its function is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo odio, lobortis eleifend consectetur non, iaculis pulvinar purus. Aenean tempus ut diam et dictum. Quisque posuere lectus a turpis fermentum, nec dictum lacus finibus. Mauris in sodales arcu. Fusce convallis quis magna sit amet molestie.
    </p>

  </div>
)

export default About
