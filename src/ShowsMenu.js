import React, { Component } from 'react'

class ShowMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadedInfo: props.isLoadedInfo,
      shows: props.shows,
      apitag: props.apitag,
      showsInfo: [],
      getShowInfo: props.getShowInfo
    } // End state
  } // End constructor

  render () {
    var { shows, getShowInfo, apitag } = this.state
    console.log(apitag)
    if (apitag === 'series') {
      return (
        <ul className='showsMenu'>
          {shows.map(show => <li className='listItem' key={show.uid} onClick={() => {
            getShowInfo(show.title)
          }}>
            {show.title}&nbsp;({show.abbreviation}) {show.productionStartYear}-
            {show.productionEndYear} </li>)}
        </ul>
      )
    } else {
      return (
        <ul className='showsMenu'>
          {shows.map(show => <li className='listItem' key={show.uid} onClick={() => {
            getShowInfo(show.title)
          }}>{show.title}&nbsp;
          ({show.usReleaseDate})</li>)}
        </ul>
      )
    }
  }
}
export default ShowMenu
