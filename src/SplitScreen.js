import React, { Component } from 'react'
import logo from './logo.svg'

class SplitScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      isLoadedInfo: false,
      title: props.title,
      shows: [],
      showsInfo: [],
      apitag: props.apitag
    } // End state
  } // End constructor

  componentDidMount () {
    var { apitag } = this.state
    fetch(`http://stapi.co/api/v1/rest/${apitag}/search?`)
      .then(res => res.json())
      .then(json => {
        json.series.sort((a, b) => a.productionStartYear - b.productionStartYear)
        this.setState({
          isLoaded: true,
          shows: json.series
        })
      })
  }

  render () {
    var { isLoaded, isLoadedInfo, title, shows, showsInfo } = this.state

    function getShowInfo (showTitle, showsInfo, isLoadedInfo) {
      console.log(showTitle, showsInfo, isLoadedInfo)
      fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${showTitle}&country=us`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '7f280763d6msha8c9035cb1174a1p142b25jsn4b72203721af'
        } }
      )
        .then(res => res.json())
        .then(json => {
          console.log(json)
          isLoadedInfo = true
          showsInfo = json.results[0]
          console.log(showTitle, showsInfo, isLoadedInfo)
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

                  {shows.map(show => <li className='listItem' key={show.uid} onClick={() => { getShowInfo(show.title, showsInfo, isLoadedInfo) }}>
                    {show.title}&nbsp;({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

                </ul>
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsContent'>
                  {!isLoadedInfo
                    ? <img src={logo} className='App-logo' alt='logo' />
                    : <img src={showsInfo.picture} alt='Show Image' />
                  }
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

export default SplitScreen
