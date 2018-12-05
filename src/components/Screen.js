import React, { Component } from 'react'

import Home from './Home'
import Settings from './Settings'
import { MapView } from '.';


const Screen = ({tab, target, saving}) => {

  switch (tab) {
    case "Home":
      return <div id="content" className="home"> <Home target={target} saving = {saving} /> </div>
    case "Search":
      return <div id="content" className="search"> <MapView target={target} saving = {saving} /> </div>
    case "Dashboard":
      return <div id="content" className="dashboard"> Under Construction </div>
    case "Settings":
      return <div id="content" className="settings"> <Settings /> </div>
  
    default:
      return <div>omgwtfhappened?</div>
      break;
  }
}

export default Screen
