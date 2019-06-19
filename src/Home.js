import React, { Component } from 'react'
import logo from './logo.svg'

class Home extends Component {

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
              <p>LCARS Access - Select media from the menu above. 
              Titles will appear in the frame to the LEFT. Click on a title to get more information in this frame.</p>
            </div>
            <div className='lcars-bracket right hollow'></div>
          </div>
        </div>
      </div>
    )
  } // End render
} // End Class

export default Home
