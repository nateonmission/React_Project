import React from 'react'
import logo from './logo.svg'

const About = (props) => (
  <div className='content'>
    <h1>{props.title}</h1>
    <img src={logo} className='App-logo' alt='logo' />

    <p>
      Welcome to [Project Name]! I designed this app as a project for CodeLouisville. Its function is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo odio, lobortis eleifend consectetur non, iaculis pulvinar purus. Aenean tempus ut diam et dictum. Quisque posuere lectus a turpis fermentum, nec dictum lacus finibus. Mauris in sodales arcu. Fusce convallis quis magna sit amet molestie.
    </p>
    <ul>
      <li>
        LCARS CSS FrameWork from http://joernweissenborn.github.io/lcars/
      </li>
      <li>
        Star Fleet Logo made by 
        <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a>
          from
        <a href="https://www.flaticon.com/" 	title="Flaticon">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
        CC 3.0 BY
        </a>
      </li>
    </ul>

  </div>
)

export default About
