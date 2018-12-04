import React from 'react';
import AuthContainer from './containers/AuthContainer'
import AppContainer from './containers/AppContainer'

class App extends React.Component {
  state = {
    signedin: false
  }

  handleSignin = () => {
    this.setState({ signedin: true })
  }

  render() {
    return (
        localStorage.getItem("token") ? <AppContainer /> : <AuthContainer handleSignin={this.handleSignin} />
    );
  }
}

export default App;
