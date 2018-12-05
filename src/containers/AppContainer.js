import React, { Component } from 'react'
import Header from '../components/Header'
import Screen from '../components/Screen'
import Footer from '../components/Footer'

export default class AppContainer extends Component {

  state = {
      activepage: "Home"
  }

  handlePage = (activepage) => {
      this.setState({ activepage })
  }

  render() {
    return (
      <div id="App">
        <Header tab={this.state.activepage} handlePage={this.handlePage}/>
        <Screen tab={this.state.activepage}/>
        <Footer tab={this.state.activepage}/>
      </div>
    )
  }
}