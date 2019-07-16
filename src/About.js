/* This page simply describes the what the app is */

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
              <div className='text'>
                <h2> StarTrek Stream-finder App </h2>
                <hr />

                <p>This REACT app loads the names of Star Trek series or movies from an API. The user then can click on the series/movie to see from where it can be streamed.</p>

                <h3>Usage</h3>

                <p>Simply click on SHOWS or MOVIES, then check on the name of the series or movie you want to see. You will then be presented with streaming options (if available). Clicking on the link will open a new window.</p>

                <h3>Features &amp; Requirements</h3>

                1. The API endpoints used are:<br />
                * http://stapi.co/api/v1/rest/series/search? == Delivers names of series from STAPI<br />
                * http://stapi.co/api/v1/rest/movie/search? == Delivers names of Movies from STAPI<br />
                * https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=[NAME_OF_SHOW_OR_MOVIE]&amp;country=us  == Locates streaming services from uTelly<br />
                * http://www.omdbapi.com/?t=SHOWTITLE&amp;apikey=78458461 == Grabs poster and description of show/movie<br />
                <br /><br />
                2. Other Requirements:<br />
                * The page is responsive to different sized screens.<br />
                
                <h3>Dependencies</h3>
                * The front-end uses an LCARS framework (http://joernweissenborn.github.io/lcars/)

                <h3>Star Fleet Logo made by</h3>
                <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons" className='normal' > Those Icons</a>
                  from
                <a href="https://www.flaticon.com/" className='normal' title="Flaticon"> www.flaticon.com</a>
                is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/" className='normal' title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" >
                  CC 3.0 BY
                </a>

                <hr />
                -J. Nathan Allen
                @nateonmission
              </div>
            </div>
            <div className='lcars-bracket right hollow'></div>
          </div>
        </div>
      </div>
    )
  } // End render
} // End Class

export default About
