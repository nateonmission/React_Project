import React, { Component } from 'react'

class ShowResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadedInfo: props.isLoadedInfo,
      showsInfo: props.showsInfo,
      showLocations: props.showsInfo.locations
    } // End state
  } // End constructor

  render () {
    var { isLoadedInfo, showsInfo, showLocations } = this.state
    console.log(isLoadedInfo, showsInfo)

    if (!isLoadedInfo) {
      console.log(showsInfo.length)
      return <div className='content'>Loading...</div>
    } else if (showLocations.length) {
      return (
        <div className='resultsMenu'>
          <img className='showsPicture' src={showsInfo.picture} />
          { showsInfo.name }
          <div className='services'>
            {showLocations.map(showLoc =>
              <a href={showLoc.url} target='_blank' key={showLoc.id}>
                <img src={showLoc.icon} alt={showLoc.name} className='servicesItem' />
              </a>
            )}
          </div>
        </div>
      )
    } else { // else if
      return <div className='content'>
        Data Unavailable through Utelly
      </div>
    }
  } // render
} // ShowResult
export default ShowResult
