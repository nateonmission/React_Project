import React, { Component } from 'react'
import logo from './logo.svg'

class Movies extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      title: props.title,
      movies: []
    } // End state
    console.log(this.state)
  } // End constructor

  componentDidMount () {
    fetch('http://stapi.co/api/v1/rest/movie/search?')
      .then(res => res.json())
      .then(json => {

        json.movies.sort((a, b) => parseInt(a.usReleaseDate.slice(0, 4)) - parseInt(b.usReleaseDate.slice(0, 4)))
        this.setState({
          isLoaded: true,
          movies: json.movies
        })
      })
  }

  render (props) {
    var { isLoaded, title, movies } = this.state

    function showInfo (title) {
      console.log(title)
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

                  {movies.map(movie => <li className='listItem' key={movie.uid} onClick={showInfo}>{movie.title}&nbsp;
                  ({movie.usReleaseDate})</li>)}

                </ul>
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsMenu'>
                  <ul className='showsMenu'>
                    
                    <img src={logo} className='App-logo' alt='logo' />

                  </ul>
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

export default Movies
