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
        json.series.sort((a, b) => a.productionStartYear - b.productionStartYear)
        this.setState({
          isLoaded: true,
          shows: json.series
        })
      })
  }

  render (props) {
    var { isLoaded, title, shows } = this.state

    function showInfo (title) {
      fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=Discovery&country=us`)
        .header('X-RapidAPI-Host', 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com')
        .header('X-RapidAPI-Key', '7f280763d6msha8c9035cb1174a1p142b25jsn4b72203721af')
        .end(function (result) {
          console.log(result.status, result.headers, result.body)
        })
    }

    if (!isLoaded) {
      return <div className='content'>Loading...</div>
    } else {
      return (

        <div className='content'>
          <h1 className='lcars-neon-carrot-color'>{title}</h1>

          <div className='splitDiv'>
            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsMenu'>

                  {shows.map(show => <li className='listItem' key={show.uid} onClick={showInfo}>{show.title}&nbsp;
                    ({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

                </ul>
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsMenu'>
                  <img src={logo} className='App-logo' alt='logo' />
                </ul>
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>
          </div>
        </div>
      )
    }
  } // End render
} // End Class

export default Shows
