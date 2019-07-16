import React, { Component } from 'react'
import Logo from './Logo'
import ShowsMenu from './ShowsMenu'
import ShowResult from './ShowResult'

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: props.isLoaded,
      isLoadedInfo: props.isLoadedInfo,
      title: props.title,
      shows: [],
      apitag: props.apitag,
      showsInfo: [],
      omdb: []
    } // End state
  } // End constructor

  componentDidMount () {
    var { apitag } = this.state
    if (apitag === 'movie') {
      fetch(`http://stapi.co/api/v1/rest/${apitag}/search?`)
        .then(res => res.json())
        .then(json => {
          json.movies.sort((a, b) => parseInt(a.usReleaseDate.slice(0, 4)) - parseInt(b.usReleaseDate.slice(0, 4)))
          this.setState({
            isLoaded: true,
            shows: json.movies
          })
        })
    } else {
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
  }

  getShowInfo (showTitle) {
    this.setState(prevState => ({
      isLoadedInfo: false,
      omdb: [],
      showsInfo: []
    }))
    fetch(`http://www.omdbapi.com/?t=${showTitle}&apikey=78458461`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          omdb: json
        })
      })
    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${showTitle}&country=us`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '7f280763d6msha8c9035cb1174a1p142b25jsn4b72203721af'
      }
    }
    )
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => ({
          isLoadedInfo: true,
          showsInfo: json.results[0]
        }))
      })
  }

  render () {
    var { isLoaded, isLoadedInfo, title, shows } = this.state

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
                <ShowsMenu
                  isLoadedInfo={isLoadedInfo}
                  shows={shows}
                  apitag={this.state.apitag}
                  getShowInfo={this.getShowInfo.bind(this)}
                />
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsContent'>
                  {!isLoadedInfo
                    ? <Logo />
                    : <ShowResult
                      isLoadedInfo={this.state.isLoadedInfo}
                      showsInfo={this.state.showsInfo}
                      omdb={this.state.omdb}
                    />
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

export default Shows
