import React, { Component } from 'react'

class ShowMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: props.isLoaded,
      isLoadedInfo: props.isLoadedInfo,
      title: props.title,
      shows: props.shows,
      showsInfo: [],
      apitag: props.apitag,
      getShowInfo: props.getShowInfo
    } // End state
  } // End constructor

  render () {
    var { isLoadedInfo, shows, showsInfo, getShowInfo } = this.state

    return (
      <ul className='showsMenu'>
        {shows.map(show => <li className='listItem' key={show.uid} onClick={() => {
          getShowInfo(show.title, showsInfo, isLoadedInfo)
        }}>
          {show.title}&nbsp;({show.abbreviation}) {show.productionStartYear} - {show.productionEndYear} </li>)}
      </ul>
    )
  }
}
export default ShowMenu
