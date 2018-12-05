import React from 'react'
import Navigation from './Navigation'

const Header = ({ tab, handlePage }) => {
  return (
    <header>
      <Navigation handlePage={handlePage} tab={tab}/>
    </header>
  )
}

export default Header
