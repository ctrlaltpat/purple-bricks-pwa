import React from 'react'

const Navigation = ({ tab, handlePage}) => {
  return (
    <nav className="ui large secondary inverted pointing menu">
      <button onClick={()=>handlePage("Home")} className="item">Home</button>
      <button onClick={()=>handlePage("Dashboard")} className="item">Dashboard</button>
      <button onClick={()=>handlePage("Search")} className="item">Search</button>
      <button onClick={()=>handlePage("Settings")} className="item">Settings</button>
    </nav>
  )
}

export default Navigation
