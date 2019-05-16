import React from 'react'

import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './App.css'

import Home from './Home'
import About from './About'
import Navagation from './Navagation'

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <section className='App-body'>
        <Navagation />
        <Route exact path='/' render={() => <Home title='HOME' />} />
        <Route exact path='/about' render={() => <About title='ABOUT' />} />
      </section>
    </div>
  </BrowserRouter>
)

export default App
