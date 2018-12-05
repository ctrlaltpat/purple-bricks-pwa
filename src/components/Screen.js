import React, { Component } from 'react'

import Home from './Home'


const Screen = ({tab}) => {

  switch (tab) {
    case "Home":
      return <div id="content"> <Home /> </div>
    case "Search":
      return <div id="content"> Search </div>
    case "Dashboard":
      return <div id="content"> dashboard </div>
    case "Settings":
      return <div id="content"> Settings </div>
  
    default:
      return <div>omgwtfhappened?</div>
      break;
  }
}

export default Screen
