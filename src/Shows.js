import React, { Component } from 'react'
import logo from './logo.svg'

class Shows extends Component {

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

          <ul className='showsMenu'>

            {shows.series.map(show => <li key={show.uid}>{show.title}&nbsp;
              ({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

          </ul>
        </div>
      )
    }
  } // End render
} // End Class

export default Shows
