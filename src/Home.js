import React, { Component } from 'react'
import logo from './logo.svg'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      title: props.title,
      shows: []
    } // End state
    console.log(this.state)
  } // End constructor

  componentDidMount () {
    fetch('http://stapi.co/api/v1/rest/series/search?')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          shows: json
        })
      })
  }

  render (props) {
    var { isLoaded, title, shows } = this.state

    if (!isLoaded) {
      return <div className='content'>Loading...</div>
    } else {
      return (
        <div className='content'>
          <h1 className='lcars-title lcars-neon-carrot-color'>{title}</h1>

          <div className='splitDiv'>
            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <img src={logo} className='App-logo' alt='logo' />
              <div className='lcars-bracket right hollow'></div>
            </div>
          </div>
        </div>
      )
    }
  } // End render
} // End Class

export default Home
