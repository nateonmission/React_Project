import React, { Component } from 'react'
import logo from './logo.svg'

class About extends Component {

  constructor (props) {
    super(props)
    this.state = {
      title: props.title
    } // End state
    console.log(this.state)
  } // End constructor

  render (props) {
    var { title } = this.state
    return (
      <div className='content'>
        <h1 className='lcars-title lcars-neon-carrot-color'>{title}</h1>
        <div className='splitDiv'>
          <div className='subContainer'>
            <div className='lcars-bracket left hollow'></div>
            <div className='innerContainer'>
              <img src={logo} className='App-logo' alt='logo' />
            </div>
            <div className='lcars-bracket right hollow'></div>
          </div>
          <div className='subContainer'>
            <div className='lcars-bracket left hollow'></div>
            <div className='innerContainer'>
              <ul>
                <li>
                Welcome to [Project Name]! I designed this app as a project for
                CodeLouisville. Its function is Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Praesent leo odio, 
                lobortis eleifend consectetur non, iaculis pulvinar purus. 
                Aenean tempus ut diam et dictum. Quisque posuere lectus a 
                turpis fermentum, nec dictum lacus finibus. Mauris in sodales 
                arcu. Fusce convallis quis magna sit amet molestie.
                </li>
                <li>
                  LCARS CSS FrameWork from http://joernweissenborn.github.io/lcars/
                </li>
                <li>stapi.co = StarTrek API that pulls from MemoryAlpha</li>
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
            <div className='lcars-bracket right hollow'></div>
          </div>
        </div>
      </div>
    )
  } // End render
} // End Class

export default About
