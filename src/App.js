import React from 'react';
import AuthContainer from './containers/AuthContainer'
import AppContainer from './containers/AppContainer'
import Api from './Api'

class App extends React.Component {
  state = {
    signedin: localStorage.getItem("token") ? true : false
  }

  handleSignin = () => {
    this.setState({ signedin: true })
  }

  render() {
    return (
        localStorage.getItem("token") && Api.validateUser() ? <AppContainer /> : <AuthContainer handleSignin={this.handleSignin} />
    );
  }
}

// const styles = {
//   splash: {
//       height: "100%",
//       flexDirection:"column",
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//       backgroundColor: "#6F58C9"
//   },

//   splashHeader: {
//       margin: 20
//   },

//   splashForm: {
//       height: 200,
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//       backgroundColor: '#7E78D2',
//       width: "80%"
//   },

//   splashInput: {
//       backgroundColor: "#fff",
//       width: "60%",
//       marginTop: 20,
//       marginBottom: 20,
//   },

//   splashButtons: {
//       display: "flex",
//       justifyContent: "space-between",
//       flexDirection: "row",
//   },

//   header: {
//       backgroundColor: "#6F58C9"
//   },
//   home: {

//   },
//   search: {

//   },
//   dashboard: {

//   },
//   settings: {

//   }
// }

export default App;
