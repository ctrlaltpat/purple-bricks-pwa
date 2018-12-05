import React from 'react'
import * as Components from '../components'

export default class AuthContainer extends React.Component {
    state = {
        signup: false
    }

    handleClick = () => {
        this.setState({ signup: !this.state.signup })
    }
    
    render(){
        return(
           this.state.signup ? <Components.Signup handleSignin={this.props.handleSignin} /> : <Components.Auth handleClick={this.handleClick} handleSignin={this.props.handleSignin} />
        )
    }
}
