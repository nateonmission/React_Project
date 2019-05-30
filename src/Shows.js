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
        json.series.sort((a, b) => a.productionStartYear - b.productionStartYear);
        this.setState({
          isLoaded: true,
          shows: json.series
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
          <h1 className='lcars-neon-carrot-color'>{title}</h1>

          <div className='splitDiv'>
            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <ul className='showsMenu'>

                {shows.map(show => <li key={show.uid}>{show.title}&nbsp;
                  ({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

              </ul>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <ul className='showsMenu'>

                {shows.map(show => <li key={show.uid}>{show.title}&nbsp;
                  ({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

              </ul>
              <div className='lcars-bracket right hollow'></div>
            </div>
          </div>
        </div>
      )
    }
  } // End render
} // End Class

export default Shows
