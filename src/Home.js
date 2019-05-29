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
          <h1>{title}</h1>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
      )
    }
  } // End render
} // End Class

export default Home
