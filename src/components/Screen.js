import React, { Component } from 'react'

import Home from './Home'
import Settings from './Settings'


const Screen = ({tab}) => {

  switch (tab) {
    case "Home":
      return <div id="content" className="home"> <Home /> </div>
    case "Search":
      return <div id="content" className="search"> Search </div>
    case "Dashboard":
      return <div id="content" className="dashboard"> dashboard </div>
    case "Settings":
      return <div id="content" className="settings"> <Settings /> </div>
  
    default:
      return <div>omgwtfhappened?</div>
      break;
  }
}

export default Screen
