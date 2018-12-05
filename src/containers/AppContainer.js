import React from 'react'
import * as Components from '../components'

export default class AuthContainer extends React.Component {
    state = {
        activepage: ""
    }

    handlePage = (activepage) => {
        this.setState({ activepage })
    }
    
    render(){
        return(
           <div>
               <Components.Dashboard />
           </div>
        )
    }
}