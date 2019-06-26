import React, { Component } from 'react'
import Logo from './Logo'
import ShowsMenu from './ShowsMenu'
// import { thisTypeAnnotation } from '@babel/types'

// import SplitScreen from './SplitScreen'

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      isLoadedInfo: false,
      title: props.title,
      shows: [],
      apitag: props.apitag,
      getShowInfo: props.getShowInfo
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
                <ShowsMenu shows={shows} apitag={this.state.apitag} getShowInfo={this.state.getShowInfo} />
                {/*
                <ul className='showsMenu'>

                  {shows.map(show => <li className='listItem' key={show.uid} onClick={() => { getShowInfo(show.title, showsInfo, isLoadedInfo) }}>
                    {show.title}&nbsp;({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}

                </ul>
                */}
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsContent'>
                  {!isLoadedInfo
                    ? <Logo /> 
                    : <h2> {isLoadedInfo} </h2>
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
