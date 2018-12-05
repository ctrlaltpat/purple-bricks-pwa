import React from 'react'

const Navigation = ({ tab, handlePage}) => {
  return (
    <nav className="ui large secondary inverted menu ">
      <button 
        onClick={()=>handlePage("Home")} 
        className={`item ${tab === 'Home'? 'active': ''}`}>
        <i aria-hidden='true' class='home big icon' />
      </button>
      <button 
        onClick={()=>handlePage("Dashboard")} 
        className={`item ${tab === 'Dashboard'? 'active': ''}`}>
        <i aria-hidden='true' class='chart bar big icon' />
      </button>
      <button 
        onClick={()=>handlePage("Search")} 
        className={`item ${tab === 'Search'? 'active': ''}`}>
        <i aria-hidden='true' class='safari big icon' />
      </button>
      <button 
        onClick={()=>handlePage("Settings")} 
        className={`item ${tab === 'Settings'? 'active': ''}`}>
        <i aria-hidden='true' class='settings big icon' />
      </button>
    </nav>
  )
}

export default Navigation
