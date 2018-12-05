import React from 'react'
import Navigation from './Navigation'

const Footer = ({ tab, handlePage }) => {
  return (
    <footer>
      <Navigation handlePage={handlePage} tab={tab}/>
    </footer>
  )
}

export default Footer
