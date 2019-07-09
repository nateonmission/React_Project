import React from 'react'

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './App.css'

import Home from './Home'
import Shows from './Shows'
import Movies from './Movies'
import About from './About'
import Navagation from './Navagation'

/*
const getShowInfo = (showTitle, showsInfo, isLoadedInfo) => {
  fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${showTitle}&country=us`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '7f280763d6msha8c9035cb1174a1p142b25jsn4b72203721af'
    } }
  )
    .then(res => res.json())
    .then(json => {
      isLoadedInfo = true
      showsInfo = json.results[0]
      console.log(showTitle, showsInfo, isLoadedInfo)
    })
}

let state = {
  isLoaded: false,
  isLoadedInfo: false,
  title: '',
  shows: [],
  apitag: ''
  // getShowInfo: getShowInfo,
  // showsInfo: []
} // End state
*/

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <section className='App-body'>
        <Navagation />
        <Route exact path='/' render={() => <Home title='Home' />} />
        <Route exact path='/shows' render={() => <Shows
          title='Star Trek TV Series'
          apitag='series'
          // getShowInfo={getShowInfo}
          // showsInfo={state.showsInfo}
          // isLoadedInfo={state.isLoadedInfo}
        />} />
        <Route exact path='/movies' render={() => <Movies
          title='Star Trek Movies'
          apitag='movie'
        />} />
        <Route exact path='/about' render={() => <About title='About' />} />
      </section>
    </div>
  </BrowserRouter>
)

export default App
