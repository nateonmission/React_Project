import React, { Component } from 'react'

class ShowResult extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadedInfo: props.isLoadedInfo,
      showsInfo: props.showsInfo,
      omdb: props.omdb
    } // End state
  } // End constructor

  render () {
    var { isLoadedInfo, showsInfo, omdb } = this.state
    console.log(isLoadedInfo, showsInfo, omdb, showsInfo)

    if (!isLoadedInfo && showsInfo.length > 0) {
      return <div className='content'>Loading...</div>
    } else if (showsInfo) {
      return (
        <div className='resultsMenu'>
          <img className='showsPicture' src={omdb.length ? omdb.Poster : showsInfo.picture} />
          <h2 className='showName'> { showsInfo.name } </h2>
          <p className='showDesc'>{ omdb.Plot } </p>
          <div className='services'>
            {showsInfo.locations.map(showLoc =>
              <a href={showLoc.url} target='_blank' key={showLoc.id}>
                <img src={showLoc.icon} alt={showLoc.name} className='servicesItem' />
              </a>
            )}
          </div>
        </div>
      )
    } else { // else if
      return (
        <div className='resultsMenu'>
          <h2 className='results'>Streaming Information is Unavailable through uTelly</h2>
        </div>
      )}
  } // render
} // ShowResult
export default ShowResult
