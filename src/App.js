import React from 'react'

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './App.css'

import Home from './Home'
import Shows from './Shows'
import About from './About'
import Navagation from './Navagation'

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <section className='App-body'>
        <Navagation />
        <Route exact path='/' render={() => <Home title='Home' />} />
        <Route exact path='/shows' render={() => <Shows
          title='Star Trek TV Series'
          apitag='series'
        />} />
        <Route exact path='/movies' render={() => <Shows
          title='Star Trek Movies'
          apitag='movie'
        />} />
        <Route exact path='/about' render={() => <About title='About' />} />
      </section>
    </div>
  </BrowserRouter>
)

export default App
