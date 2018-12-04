import React from 'react';
import AuthContainer from './containers/AuthContainer'
import AppContainer from './containers/AppContainer'

class App extends React.Component {
  render() {
    return (
        localStorage.getItem("token") ? <AppContainer /> : <AuthContainer />
    );
  }
}

export default App;
