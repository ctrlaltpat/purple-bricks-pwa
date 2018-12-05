import React from 'react'
import Brick from './Brick'
import {Header, Card} from 'semantic-ui-react'

const testVal = [...Array(200)]

const Home = ({target, saving}) => {
  return (
    <div id="home-container">

      <div className="house">
        <div className="bricks">
          {
            [...Array(saving)].map((_, i)=> <Brick womp={i}/>)
          }
        </div>
      </div>
      <Card>
          <Card.Content>
            <Header>You currently have saved £{saving}!</Header>
          </Card.Content>
      </Card>
    </div>
  )
}


const styles = {
  fill: "transparent",
  stroke: "purple",
  strokeWidth: 1
}


export default Home