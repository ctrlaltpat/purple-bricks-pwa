import React from 'react';
import Auth from "./components/Auth"

class App extends React.Component {
  render() {
    return (
        localStorage.getItem("token") ? <AppContainer /> : <AuthContainer />
    );
  }
}

export default App;
