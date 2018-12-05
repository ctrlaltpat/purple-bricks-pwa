import React from 'react'
import Brick from './Brick'

const testVal = [...Array(200)]

const Home = () => {
  return (
    <div id="home-container">

      <div className="house">
        <div className="bricks">
          {
            testVal.map((_, i)=> <Brick womp={i}/>)
          }
        </div>
      </div>

    </div>
  )
}


const styles = {
  fill: "transparent",
  stroke: "purple",
  strokeWidth: 1
}


export default Home