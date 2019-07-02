import React, { Component } from 'react'
import Logo from './Logo'
import ShowsMenu from './ShowsMenu'
import ShowResult from './ShowResult'
// import { thisTypeAnnotation } from '@babel/types'

// import SplitScreen from './SplitScreen'

class Shows extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: props.isLoaded,
      isLoadedInfo: props.isLoadedInfo,
      title: props.title,
      shows: [],
      apitag: props.apitag,
      getShowInfo: props.getShowInfo,
      showContents: props.showContents,
      showsInfo: props.showsInfo
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
    console.log('shows')
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
              </div>
              <div className='lcars-bracket right hollow'></div>
            </div>

            <div className='subContainer'>
              <div className='lcars-bracket left hollow'></div>
              <div className='innerContainer'>
                <ul className='showsContent'>
                  {!isLoadedInfo
                    ? <Logo />
                    : <ShowResult shows={shows} apitag={this.state.apitag} getShowInfo={this.state.getShowInfo} />
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
