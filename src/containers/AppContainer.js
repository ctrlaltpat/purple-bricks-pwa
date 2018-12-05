import React, { Component } from 'react'
import Header from '../components/Header'
import Screen from '../components/Screen'
import Footer from '../components/Footer'

export default class AppContainer extends Component {

  state = {
      activepage: ""
  }

  handlePage = (activepage) => {
      this.setState({ activepage })
  }

  render() {
    return (
      <div id="App">
        <Header tab={"Home"}/>
        <Screen tab={"Home"}/>
        <Footer tab={"Home"}/>
      </div>
    )
  }
}