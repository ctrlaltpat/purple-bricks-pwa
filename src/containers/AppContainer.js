import React, { Component } from 'react'
import Header from '../components/Header'
import Screen from '../components/Screen'
import Footer from '../components/Footer'
import Api from '../Api'

export default class AppContainer extends Component {

  state = {
      activepage: "Home",
      target: "",
      saving: ""
  }

  handlePage = (activepage) => {
      this.setState({ activepage })
  }

  componentDidMount = () => {
    Api.validateUser().then(resp => this.setState({ target: resp.target, saving: resp.saving}))
  }

  render() {
    return (
      <div id="App">
        <Header tab={this.state.activepage}/>
        <Screen tab={this.state.activepage} target = {this.state.target} saving = {this.state.saving} />
        <Footer tab={this.state.activepage} handlePage={this.handlePage}/>
      </div>
    )
  }
}