import React from 'react';
import AppContainer from './containers/AppContainer'
import AuthContainer from './containers/AuthContainer'

class App extends React.Component {
  
  state = {

  }

  render() {
    return (
      <div>
        {1 ? <AppContainer /> : <AuthContainer />}
      </div>
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
