import React from 'react'
import Api from '../Api'
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react'

export default class LoginForm extends React.Component {

    state = {
        email: null,
        password: null,
        passwordConfirmation: null,
        firstname: null,
        lastname: null,
        confirmed: false
    }

    handleLogin = () => {
        const { email, password, firstname, lastname } = this.state
        const userdata = { email , password, firstname, lastname }
        Api.signup(userdata).then(resp => localStorage.setItem("token", resp.token)).then(() => this.props.handleSignin())
    }

    validateState = () => {
        const { email, password, firstname, lastname, passwordConfirmation, confirmed } = this.state
    }

    handleChange = (e, {name, value}) => {
        this.setState({ [name]: value })
        if (this.state.password === this.state.passwordConfirmation && this.validateState()) {
            this.setState({ confirmed: true })
        }
    }

    render() {
        const { email, password, firstname, lastname, passwordConfirmation } = this.state
        return(
            <div className='login-form' style={{backgroundColor: "#6F58C9"}}>
            <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
                height: 100%;
            }
            `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
            <Grid.Column style={{ maxWidth: 450 }} >
                <Header as='h2' style={{color: "#fff"}} textAlign='center'>
                Brick by Brick
                </Header>
                <Form size='large' onSubmit={this.handleLogin}>
                <Segment stacked>
                    <Form.Input fluid icon='user' name="email" value={email} iconPosition='left' placeholder='E-mail address' onChange={this.handleChange} />
                    <Form.Input fluid icon={(this.state.password && this.state.password.length > 6) ? <Icon color="green" name="check" /> : 'lock'} name="password" value={password} iconPosition='left' placeholder='Password' type='password' onChange={this.handleChange} />
                    <Form.Input fluid icon={this.state.password === this.state.passwordConfirmation ? <Icon color="green" name="check" /> : <Icon color="red" name="close" />} name="passwordConfirmation" value={passwordConfirmation} iconPosition='left' placeholder='Confirm Password' type='password' onChange={this.handleChange} />
                    <Form.Input fluid icon='star' name="firstname" value={firstname} iconPosition='left' placeholder='First Name' onChange={this.handleChange} />
                    <Form.Input fluid icon='star' name="lastname" value={lastname} iconPosition='left' placeholder='Last Name' onChange={this.handleChange} />
                    <Button style={{backgroundColor: "#6F58C9", color:"#fff"}} fluid size='large'>
                    Sign Up
                    </Button>
                </Segment>
                </Form>
            </Grid.Column>
            </Grid>
        </div>

        )
    }
  
}